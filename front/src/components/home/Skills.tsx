import {Link} from "react-router-dom";
import language from "../../language";
import Frameworks from "./skills/Frameworks";
import Languages from "./skills/Languages";
import Others from "./skills/Others";
import Client from "../../struct/Client";

export default function Skills({client}: { client: Client }) {
  return (<div className="text-vortezz-white text-center bg-vortezz-gray2">
    <h1
      className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">{client.getTranslation("about.skills.title")}</h1>
    <h1
      className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold m-4">{client.getTranslation("about.skills.languages")}</h1>
    <Languages/>
    <h1 className="text-3xl font-bold m-4">{client.getTranslation("about.skills.framework")}</h1>
    <Frameworks/>
    <h1 className="text-3xl font-bold m-4">{client.getTranslation("about.skills.others")}</h1>
    <Others client={client}/>
  </div>)
}
