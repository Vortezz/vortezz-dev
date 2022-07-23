import {Link} from "react-router-dom";
import language from "../language";
import Client from "../struct/Client";

export default function Footer({client}: { client: Client }) {
  return (<div
    className="h-60 w-full bg-vortezz-gray1 flex justify-around text-vortezz-white relative clear-both flex-col md:flex-row">
    <div
      className="m-auto flex flex-col font-semibold text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl w-[calc(90%)] md:w-2/5">
      <h1 className="m-4">{client.getTranslation("bottombar.links.miss")}</h1>
      <div className="w-full flex flex-row justify-between text-3xl m-auto md:mx-4">
        <Link to="/twitter" target="_blank">
          <i className="bx bxl-twitter bg-social-twitter p-2 rounded-full"/>
        </Link>
        <Link to="/github" target="_blank">
          <i className="bx bxl-github bg-social-github p-2 rounded-full"/>
        </Link>
        <Link to="/youtube" target="_blank">
          <i className="bx bxl-youtube bg-social-youtube p-2 rounded-full"/>
        </Link>
        <Link to="/discord" target="_blank">
          <i className="bx bxl-discord-alt bg-social-discord p-2 rounded-full"/>
        </Link>
      </div>
    </div>
    <div className="flex flex-row mx-auto">
      <ul className="my-4 md:mt-16 font-bold">
        <h1>{client.getTranslation("bottombar.links.useful")}</h1>
        <Link to="/">
          <li
            className="font-semibold text-vortezz-gray3 hover:text-vortezz-purple cursor-pointer">{client.getTranslation("bottombar.links.childs.about")}</li>
        </Link>
        <Link to="/contact">
          <li
            className="font-semibold text-vortezz-gray3 hover:text-vortezz-purple cursor-pointer">{client.getTranslation("bottombar.links.childs.contact")}</li>
        </Link>
        <Link to="/github" target="_blank">
          <li className="font-semibold text-vortezz-gray3 hover:text-vortezz-purple cursor-pointer">Github</li>
        </Link>
      </ul>
      <ul className="my-4 ml-8 md:mt-16 font-bold">
        <h1>{client.getTranslation("bottombar.links.other")}</h1>
        <Link to="/status">
          <li
            className="font-semibold text-vortezz-gray3 hover:text-vortezz-purple cursor-pointer">{client.getTranslation("bottombar.links.childs.status")}</li>
        </Link>
        <Link to="/branding">
          <li
            className="font-semibold text-vortezz-gray3 hover:text-vortezz-purple cursor-pointer">{client.getTranslation("bottombar.links.childs.branding")}</li>
        </Link>
        <Link to="/terms">
          <li
            className="font-semibold text-vortezz-gray3 hover:text-vortezz-purple cursor-pointer">{client.getTranslation("bottombar.links.childs.terms")}</li>
        </Link>
      </ul>
    </div>
  </div>)
}
