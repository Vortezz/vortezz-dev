import { Connection } from "mysql2";
import fetch from "node-fetch";
import Statuses from "./struct/Statuses";
import ServiceData from "./struct/ServiceData";
import ServiceDetails from "./struct/ServiceDetails";
import Service from "./struct/Service";
import Details from "./struct/Details";
import WebSocket, { Server } from "ws";

export async function resolveStatus(connection: Connection) {
    const promise = connection.promise();

    const [servicesTyped, fields] = await promise.query("SELECT * FROM `status_details`")

    const services: any = servicesTyped;
    const servicesObject: Service[] = [];

    let isOneServiceDown = false;

    let globalUptime: number = 0;

    for (let i: number = 0; i < services.length; i++) {

        var day = new Date();
        day.setUTCHours(-1, 0, 0, 0);

        const detailsObject: Details[] = [];

        const service: ServiceData = services[i];

        const [serviceTyped, serviceField] = await promise.query("SELECT * FROM `status_history` WHERE `service` = ? ORDER BY `timestamp` DESC", [service.id])

        const serviceDetails: any = serviceTyped;

        if (serviceDetails.length == 0) {
            let isUp = false;
            if (service.type == 0) {
                isUp = (await fetch(service.link)).status == 200
            }
            if (!isUp) {
                isOneServiceDown = true;
            }
            promise.query("INSERT INTO `status_history`(`service`, `timestamp`, `uptime`, `up`, `check_count`) VALUES (?,?,?,?,?)", [service.id, day.getTime() / 1000, isUp ? 100 : 0, isUp ? 1 : 0, 1])
            serviceDetails.push({ timestamp: (day.getTime() / 1000).toString(), uptime: isUp ? 100 : 0, up: isUp ? 1 : 0, check_count: 1 })
        }

        let localUptime: number = 0;

        for (let j: number = 0; j < serviceDetails.length; j++) {
            let details: ServiceDetails = serviceDetails[j];
            if (j == 0) {
                let isUp = false;
                if (service.type == 0) {
                    try {
                        isUp = (await fetch(service.link)).status == 200
                    } catch (e) { }
                }
                if (!isUp) {
                    isOneServiceDown = true;
                }
                if (details.timestamp != day.getTime() / 1000) {
                    promise.query("INSERT INTO `status_history`(`service`, `timestamp`, `uptime`, `up`, `check_count`) VALUES (?,?,?,?,?)", [service.id, day.getTime() / 1000, isUp ? 100 : 0, isUp ? 1 : 0, 1])
                    localUptime += details.uptime;
                    detailsObject.push({ color: isUp ? "green" : "red", uptime: isUp ? 100 : 0, date: (day.getTime() / 1000).toString() })
                } else {
                    promise.query("UPDATE `status_history` SET `uptime`=?,`up`=?,`check_count`=`check_count`+1 WHERE `timestamp` = ? AND `service` = ?", [Math.round((details.uptime * details.check_count + (isUp ? 100 : 0)) / (details.check_count + 1) * 100) / 100, isUp ? 1 : 0, day.getTime() / 1000, service.id])
                    details.uptime = Math.round(((details.uptime * details.check_count + (isUp ? 100 : 0)) / (details.check_count + 1)) * 100) / 100
                }
            }
            localUptime += details.uptime;
            detailsObject.push({ color: details.uptime >= 99.5 ? "green" : details.uptime >= 97.5 ? "dark_green" : details.uptime >= 95 ? "yellow" : "red", uptime: details.uptime, date: details.timestamp.toString() })
        }

        while (detailsObject.length < 30) {
            detailsObject.push({ color: "gray", uptime: -1, date: (parseInt(detailsObject[detailsObject.length - 1].date) - 60 * 60 * 24).toString() })
        }

        detailsObject.reverse();

        localUptime /= serviceDetails.length + (serviceDetails[0].timestamp != day.getTime() / 1000 ? 1 : 0);

        const serviceObject = <Service><unknown>{};

        serviceObject.uptime = Math.round(localUptime * 100) / 100;
        serviceObject.details = detailsObject;
        serviceObject.name = service.name;

        servicesObject.push(serviceObject)

        globalUptime += localUptime;
    }

    globalUptime /= services.length;

    let status = <Statuses>{
        uptime: globalUptime,
        lastUpdate: Date.now(),
        problems: isOneServiceDown ? "down" : "",
        services: servicesObject
    };

    return status;
}

function createStatusJson(status: Statuses): string {
    return JSON.stringify(status)
}

export async function initStatusChecker(wss: Server, connection: Connection) {
    let status: Statuses = await resolveStatus(connection);
    let date: number = Date.now();

    wss.on("connection", (ws: WebSocket) => {
        ws.send(createStatusJson(status));
    })

    setInterval(async () => {
        status = await resolveStatus(connection);
        date = Date.now();
        wss.clients.forEach((client: WebSocket) => {
            client.send(createStatusJson(status));
        })
        console.log("Status edited")
    }, 60000)
}