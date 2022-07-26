import {useState} from "react";
import ReconnectingWebSocket from "reconnecting-websocket";
import ServiceWidget from "./ServiceWidget";
import Service from "../../struct/Service";
import Statuses from "../../struct/Statuses";
import Client from "../../struct/Client";

export default function Services({client}: { client: Client }) {
  if (!client.statuses?.services) {
    return <></>
  }
  return <>{client.statuses?.services.map((service: Service, index: number) => {
    return <ServiceWidget key={index} service={service} client={client}/>
  })}</>
}
