import EventEmitter from "events";
import ReconnectingWebSocket from "reconnecting-websocket";
import Statuses from "./Statuses";
import {Socket, io} from "socket.io-client";

export default class Client extends EventEmitter {
    //public wss: ReconnectingWebSocket = new ReconnectingWebSocket("wss://vortezz.dev/")
    public statuses: Statuses | undefined;
    public connected: boolean = false;
    public error: boolean = false;

    public wss: Socket = io();

    constructor() {
        super();

        this.wss.on("connect", () => {
            this.error = false;
            this.connected = true;
        })

        this.wss.on("error", () => {
            this.error = true;
        })

        this.wss.on("status", (data) => {
            this.statuses = data;
        })
    }
}