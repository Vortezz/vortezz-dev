import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/status/Services";
import Wave from "../components/Wave";
import date from "date-and-time";
import Client from "../struct/Client";
import { useEffect, useState } from "react";

export default function Status({client}: { client: Client }) {
  const [ticking, setTicking] = useState(true),
    [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => ticking && setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, ticking])

  return (
    <div>
      <div className="w-full dark:bg-vortezz-gray2 bg-light-gray2 top-0 left-0 min-h-[calc(90%)]">

        <div className="h-0 w-0 bg-status-green"/>
        <div className="h-0 w-0 bg-status-dark_green"/>
        <div className="h-0 w-0 bg-status-yellow"/>
        <div className="h-0 w-0 bg-status-red"/>
        <div className="h-0 w-0 bg-status-gray"/>
        <div className="h-0 w-0 text-status-green"/>
        <div className="h-0 w-0 text-status-dark_green"/>
        <div className="h-0 w-0 text-status-yellow"/>
        <div className="h-0 w-0 text-status-red"/>
        <div className="h-0 w-0 text-status-gray"/>

        <Navbar client={client}/>
        <h1
          className="dark:text-vortezz-white text-vortezz-gray-1 font-extrabold text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center m-1">{client.getTranslation("status.title")} :</h1>
        <h1
          className="dark:text-vortezz-white text-vortezz-gray-1 text-lg md:text-xl xl:text-2xl text-center">{client.connected && !client.error ? `${client.getTranslation("status.last")} : ${date.format(new Date(client.statuses?.lastUpdate!), "HH:mm:ss")} (${Math.round((Date.now() - (new Date(client.statuses?.lastUpdate!).getTime() ?? 0)) / 1000)}${client.getTranslation("status.ago")})` : client.getTranslation("status.noconnection")}</h1>
        <br/>
        <Wave variant={1} client={client}/>
        {
          client.connected && !client.error
            ?
            <div className="w-full dark:bg-vortezz-gray3 bg-light-gray3 flex">
              <h1
                className="dark:text-vortezz-white text-vortezz-gray-1 font-extrabold text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center m-auto flex">
                <i
                  className={`bx bxs-circle mr-4 my-auto text-status-${!client.statuses?.problems ? "green" : "red"}`}/><span
                className={"my-auto"}>{!client.statuses?.problems ? client.getTranslation("status.state.on") : client.getTranslation("status.state.problems")}</span>
              </h1>
            </div>
            :
            <div className="w-full dark:bg-vortezz-gray3 bg-light-gray3 flex">
              <h1
                className="dark:text-vortezz-white text-vortezz-gray-1 font-extrabold text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center m-auto flex">
                <i
                  className={`bx bxs-circle mr-4 text-status-yellow`}/>{client.getTranslation("status.state.connecting")}
              </h1>
            </div>
        }
        <Wave variant={2} client={client}/>
        <Services client={client}/>
      </div>
      <Wave variant={4} client={client}/>
      <Footer client={client}/>
    </div>
  )
}
