import Service from "./Service";

export default interface Statuses {
    uptime: number,
    lastUpdate: number,
    problems: string,
    services: Service[]
}