import Service from "./Service";

export default interface Statuses {
    uptime: number,
    lastUpdate: Date,
    problems: boolean,
    services: Service[]
}