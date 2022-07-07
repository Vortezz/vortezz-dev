import language from "../../language";
import ProjectsComponent from "./projects/ProjectsComponent";

// @ts-ignore
import ekaliaLogo from "../../assets/pictures/ekalia.png";

// @ts-ignore
import molkkyLogo from "../../assets/pictures/molkky.png";

export default function Projects() {
    return (
        <div className="text-vortezz-white text-center bg-vortezz-gray3">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">{language.ABOUT.PROJECTS.TITLE}</h1>
            <div className="w-[calc(90%)] flex flex-wrap mx-auto">
                <ProjectsComponent image={ekaliaLogo} title={"Ekalia"}
                                   description={language.ABOUT.PROJECTS.PROJECTS.EKALIA} link={"https://ekalia.fr/"}/>
                <ProjectsComponent image={molkkyLogo} title={"Möllky Count"}
                                   description={language.ABOUT.PROJECTS.PROJECTS.MOLKKY}
                                   link={"https://github.com/Vortezz/molkky-count"}/>
            </div>
        </div>
    )
}