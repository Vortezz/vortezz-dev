import ProjectsComponent from "./components/ProjectsComponent";

// @ts-ignore
import ekaliaLogo from "../../assets/pictures/ekalia.png";

// @ts-ignore
import molkkyLogo from "../../assets/pictures/molkky.png";
import Client from "../../struct/Client";

export default function Projects({client}: { client: Client }) {
  return (
    <div className="dark:text-vortezz-white text-vortezz-gray-1 text-center dark:bg-vortezz-gray3 bg-light-gray3">
      <h1
        className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">{client.getTranslation("about.projects.title")}</h1>
      <div className="w-[calc(90%)] flex flex-wrap mx-auto">
        <ProjectsComponent image={ekaliaLogo} title={"Ekalia"}
                           description={client.getTranslation("about.projects.ekalia")}
                           links={[{
                             uri: "https://ekalia.fr/",
                             icon: "bx-link",
                             blank: true,
                           }, {
                             uri: "https://ekalia.fr/discord",
                             icon: "bxl-discord-alt",
                             blank: true,
                           }, {
                             uri: "https://ekalia.fr/twitter",
                             icon: "bxl-twitter",
                             blank: true,
                           }]}
        />
        <ProjectsComponent image={molkkyLogo} title={"Möllky Count"}
                           description={client.getTranslation("about.projects.molkky")}
                           links={[{
                             uri: "https://github.com/Vortezz/molkky-count",
                             icon: "bxl-github",
                             blank: true,
                           }, {
                             uri: "https://play.google.com/store/apps/details?id=dev.vortezz.molkkycount",
                             icon: "bxl-play-store",
                             blank: true,
                           }]}
        />
      </div>
    </div>
  )
}
