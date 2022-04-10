import {Link} from "react-router-dom";

export default function ProjectsComponent({image, title, description, link}: Props) {
    console.log(image);

    return <a href={link} target="_blank"
              className={"h-36 w-[calc(90%)] bg-vortezz-gray2 w-[calc(20rem)] rounded-lg flex text-white mx-auto mt-4"}>
        <img src={image} className={"h-8 my-auto ml-8 mr-6 hover"}/>
        <div className={"m-auto"}>
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