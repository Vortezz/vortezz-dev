import {Link} from "react-router-dom";

export default function ProjectsComponent({image, title, description, link}: Props) {
    return <a href={link} target="_blank"
              className={"h-36 w-[calc(90%)] bg-vortezz-gray2 w-[calc(20rem)] rounded-lg flex text-white mx-auto mt-4"}>
        <img src={image} className={"w-10 my-auto ml-6 mr-6 hover"}/>
        <div className={"m-auto mr-4"}>
            <div className={"text-left text-2xl font-bold"}>{title}</div>
            <div className={"text-left"}>{description}</div>
        </div>
    </a>
}

interface Props {
    image: string;
    title: string;
    description: string;
    link: string;
}