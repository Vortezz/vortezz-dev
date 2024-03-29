// @ts-nocheck
import Service from "../../struct/Service";
import date from "date-and-time";
import ReactTooltip from "react-tooltip";
import Client from "../../struct/Client";

export default function ServiceWidget({service, client}: { service: Service, client: Client }) {
  return <div className={`h-40 w-[calc(95%)] m-auto`}>
    <div className="flex justify-between w-[calc(100%)] max-w-[calc(40rem)] m-auto">
      <div className={"flex"}>
        <i
          className={`text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl bx bxs-circle mr-4 mt-auto mb-0 text-status-${service.up ? "green" : "red"}`}/>
        <h1
          className="font-bold text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl dark:text-vortezz-white text-vortezz-gray-1">{service.name}</h1>
      </div>
      <h1
        className="font-bold text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl dark:text-vortezz-white text-vortezz-gray-1">{service.uptime}%</h1>
    </div>
    <div className="h-12 flex w-[calc(264px)] sm:w-[calc(480px)] m-auto p-auto">
      {service.statusHistory.map((details, index) => {
        return <div key={index}>
          <div data-tip="" data-for={`${index}-${service.name.toLocaleLowerCase().replace(" ", "_")}`}
               key={index}
               className={`h-12 w-1 sm:w-2 bg-status-${details.color} m-[calc(0.15rem)] sm:m-1 rounded-full`}/>
          <ReactTooltip place="bottom" id={`${index}-${service.name.toLocaleLowerCase().replace(" ", "_")}`}
                        type="dark" effect="solid">
            <h1>{date.format(new Date(details.date), "ddd, MMM DD YYYY")}</h1>
            <p>{details.uptime === -1 ? client.getTranslation("status.state.nodata") : `${details.uptime}%`}</p>
          </ReactTooltip>
        </div>
      })}
    </div>
  </div>
}

