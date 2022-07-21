import Database from "@ioc:Adonis/Lucid/Database";
import axios from "axios";

enum StatusType {
  HTTP,
  PING
}

class ServiceHistory {
  color: string;
  uptime: number;
  date: Date;

  constructor(color: string, uptime: number, date: Date) {
    this.color = color;
    this.uptime = uptime;
    this.date = date;
  }
}

class Service {
  public up: boolean = true;
  public uptime: number;
  public statusHistory: ServiceHistory[] = [];
  public name: string;

  public async resolveService(service: {
    id: number,
    name: string,
    type: StatusType,
    link: string,
    port: null | number
  }, day: Date): Promise<Service> {
    this.name = service.name;

    const row = await Database.from("status_history")
      .select("*")
      .where("service", service.id)
      .where("timestamp", day.getTime())
      .first();

    if (service.type === StatusType.HTTP) {
      try {
        const request = await axios.get(service.link)

        if (request.status !== 200) {
          this.up = false;
        }
      } catch (e) {
        this.up = false;
      }
    }

    if (row === null) {
      this.uptime = this.up ? 100 : 0;

      await Database.table("status_history").insert({
        service: service.id,
        timestamp: day.getTime(),
        uptime: this.uptime,
        up: this.up,
        checkcount: 1
      })
    } else {
      this.uptime = Math.round((row.uptime * row.checkcount + (this.up ? 100 : 0)) / (row.checkcount + 1) * 100) / 100;

      await Database.from("status_history").update({
        uptime: this.uptime,
        up: this.up,
        checkcount: row.checkcount + 1
      }).where("service", service.id).where("timestamp", day.getTime())
    }

    const previousHistories = await Database.from("status_history")
      .select("*")
      .where("service", service.id)
      .limit(30)
      .orderBy("timestamp", "desc");

    for (let previousHistory of previousHistories) {
      this.statusHistory.push(new ServiceHistory(
        previousHistory.uptime >= 99.5 ? "green" : previousHistory.uptime >= 97.5 ? "dark_green" : previousHistory.uptime >= 95 ? "yellow" : "red",
        previousHistory.uptime,
        new Date(previousHistory.timestamp)
      ));
    }

    while (this.statusHistory.length < 30) {
      this.statusHistory.push(new ServiceHistory(
        "gray", -1, new Date(this.statusHistory[this.statusHistory.length - 1].date.getTime() - 1000 * 60 * 60 * 24)
      ));
    }

    this.statusHistory.reverse()

    return this;
  }
}

export default class Status {
  lastUpdate: Date;
  problems: boolean;
  services: Service[];

  public async resolveStatus() {
    const newServices: Service[] = [];
    let newProblems: boolean = false;

    const day = new Date();
    day.setUTCHours(-1, 0, 0, 0);

    await Database.from("status_details").select("*").then(async (servicesDetails) => {
      for (let serviceDetails of servicesDetails) {
        let service = await new Service().resolveService(serviceDetails as {
          id: number,
          name: string,
          type: StatusType,
          link: string,
          port: null | number
        }, day);

        newProblems = service.up ? newProblems : true

        newServices.push(service)
      }
    })

    this.services = newServices;
    this.lastUpdate = new Date();
    this.problems = newProblems;

    console.log(`[${this.lastUpdate}] Status updated`)
  }
}
