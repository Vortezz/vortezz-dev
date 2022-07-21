import {useState} from "react";
import ReconnectingWebSocket from "reconnecting-websocket";
import ServiceWidget from "./ServiceWidget";
import Service from "../../struct/Service";
import Statuses from "../../struct/Statuses";

export default function Services({services}: { services: Service[] | undefined }) {
    if (!services) {
        return <></>
    }
    return <>{services.map((service: Service, index: number) => {
        return <ServiceWidget key={index} name={service.name} statusHistory={service.statusHistory} uptime={service.uptime}
                              up={service.up}/>
    })}</>
}