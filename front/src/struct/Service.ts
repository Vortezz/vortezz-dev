import StatusHistory from "./Details";

export default interface Service {
    name: string,
    uptime: number,
    statusHistory: StatusHistory[],
    up: boolean,
}