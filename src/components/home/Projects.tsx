import language from "../../language";

export default function Projects() {
    return (
        <div className="text-vortezz-white text-center bg-vortezz-gray3">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">{language.ABOUT.PROJECTS.TITLE}</h1>
            <div className="w-[calc(90%)] flex flex-wrap mx-auto">
                <p className="text-center mx-auto text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl">{language.ABOUT.PROJECTS.DESC}</p>
            </div>
        </div>
    )
}