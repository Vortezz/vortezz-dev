import { useState } from "react";
import ReconnectingWebSocket from "reconnecting-websocket";
import ServiceWidget from "./ServiceWidget";
import Service from "./struct/Service";
import Statuses from "./struct/Statuses";

export default function Services(services: Service[] | undefined) {
    if (!services) { return }
    return services.map((service: Service) => {
        return <ServiceWidget name={service.name} details={service.details} uptime={service.uptime}></ServiceWidget>
    })
}