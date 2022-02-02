import language from "../../language";
import Timeline from "./Timeline";

export default function Who() {
    return (
        <div className="text-vortezz-white text-center bg-vortezz-gray3">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">{language.ABOUT.TIMELINE.TITLE}</h1>
            <Timeline />
        </div>
    )
}