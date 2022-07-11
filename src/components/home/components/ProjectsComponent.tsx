import {Link} from "react-router-dom";

export default function ProjectsComponent({image, title, description, links}: Props) {
    return <div
        className={"h-40 w-[calc(90%)] bg-vortezz-gray1 w-[calc(20rem)] rounded-lg flex text-white mx-auto mt-4"}>
        <img src={image} className={"w-10 my-auto ml-6 mr-6 hover"}/>
        <div className={"m-auto mr-4"}>
            <div className={"text-left text-2xl font-bold"}>{title}</div>
            <div className={"text-left"}>{description}</div>
            <div className={"flex justify-left mt-1"}>
                {links.map((link, index) => {
                    return <a key={index} href={link.uri} target={link.blank ? "_blank" : "_self"}>
                        <i className={`bx ${link.icon} text-2xl mr-4 hover:text-vortezz-purple`}/>
                    </a>
                })}
            </div>
        </div>
    </div>
}

interface Props {
    image: string;
    title: string;
    description: string;
    links: { uri: string, icon: string, blank: boolean }[];
}