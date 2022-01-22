import Details from "./Details";

export default interface Service {
    name: string,
    uptime: number,
    details: Details[]
}