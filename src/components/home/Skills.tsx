import { Link } from "react-router-dom";
import language from "../../language";
import Frameworks from "./skills/Frameworks";
import Languages from "./skills/Languages";
import Others from "./skills/Others";

export default function Skills() {
    return (<div className="text-vortezz-white text-center bg-vortezz-gray2">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">{language.ABOUT.SKILLS.TITLE}</h1>
        <h1 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold m-4">{language.ABOUT.SKILLS.LANGUAGES}</h1>
        <Languages />
        <h1 className="text-3xl font-bold m-4">{language.ABOUT.SKILLS.FRAMEWORK}</h1>
        <Frameworks />
        <h1 className="text-3xl font-bold m-4">{language.ABOUT.SKILLS.OTHERS}</h1>
        <Others />
    </div>)
}