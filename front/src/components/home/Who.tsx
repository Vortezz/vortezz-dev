import language from "../../language";
import Timeline from "./Timeline";
import Client from "../../struct/Client";

export default function Who({client}: { client: Client }) {
    return (
        <div className="text-vortezz-white text-center bg-vortezz-gray3">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">{client.getTranslation("about.timeline.title")}</h1>
            <Timeline client={client} />
        </div>
    )
}
