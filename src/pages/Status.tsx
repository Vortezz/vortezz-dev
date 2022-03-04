import { Component, useState } from "react";
import ReconnectingWebSocket from "reconnecting-websocket";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/status/Services";
import Statuses from "../components/status/struct/Statuses";
import Wave from "../components/Wave";
import date from "date-and-time";
import language from "../language";

export default class Status extends Component {
    wss = new ReconnectingWebSocket("wss://vortezz.dev/")
    statuses: Statuses | undefined;
    connected = false;
    error = false;

    componentDidMount() {
        let parent = this;

        let interval: NodeJS.Timeout;

        this.wss.onerror = function (e) {
            parent.error = true;
        }

        this.wss.onopen = function (e) {
            console.log("Open")
            parent.error = false;
            parent.connected = true;
        }

        this.wss.onmessage = function (e) {
            const data: Statuses = JSON.parse(e.data);
            clearInterval(interval);
            parent.statuses = data;
            console.log(parent.statuses)
            parent.forceUpdate()
            interval = setInterval(() => {
                parent.forceUpdate()
            }, 1000)
        }
    }

    render() {
        return (
            <div>
                <div className="w-full bg-vortezz-gray2 top-0 left-0 min-h-[calc(90%)]">
                    <div className="h-0 w-0 bg-status-green"></div>
                    <div className="h-0 w-0 bg-status-dark-green"></div>
                    <div className="h-0 w-0 bg-status-yellow"></div>
                    <div className="h-0 w-0 bg-status-red"></div>
                    <div className="h-0 w-0 bg-status-gray"></div>
                    <div className="h-0 w-0 text-status-red"></div>
                    <div className="h-0 w-0 text-status-green"></div>
                    <Navbar />
                    <h1 className="text-vortezz-white font-extrabold text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center m-1">{language.STATUS.TITLE} :</h1>
                    <h1 className="text-vortezz-white text-lg md:text-xl xl:text-2xl text-center">{this.connected && !this.error ? `${language.STATUS.LAST} : ${date.format(new Date(parseInt(this.statuses?.lastUpdate.toString() ?? "0")), "HH:mm:ss")} (${Math.round(((Date.now()) - parseInt(this.statuses?.lastUpdate.toString() ?? "0")) / 1000)}${language.STATUS.AGO})` : language.STATUS.NOCONNECTION}</h1>
                    <br />
                    {Wave(1)}
                    {
                        this.connected && !this.error
                            ?
                            <div className="w-full bg-vortezz-gray3 flex">
                                <h1 className="text-vortezz-white font-extrabold text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center m-auto flex"><i className={`bx bxs-circle mr-4 text-status-${this.statuses?.problems == "" ? "green" : "red"}`}></i>{this.statuses?.problems == "" ? language.STATUS.STATE.ON : language.STATUS.STATE.PROBLEMS}</h1>
                            </div>
                            :
                            <div className="w-full bg-vortezz-gray3 flex">
                                <h1 className="text-vortezz-white font-extrabold text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center m-auto flex"><i className={`bx bxs-circle mr-4 text-status-yellow`}></i>{language.STATUS.STATE.CONNECTING}</h1>
                            </div>
                    }
                    {Wave(2)}
                    {Services(this.statuses?.services)}
                </div>
                {Wave(4)}
                <Footer />
            </div>
        )
    }
}

interface StatusStateProps {
    wss: ReconnectingWebSocket
}