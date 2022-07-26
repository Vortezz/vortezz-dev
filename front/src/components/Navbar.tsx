import {useState} from "react";
import {Link} from "react-router-dom";
import language from "../language";
import Client from "../struct/Client";

const logo = require("../assets/pictures/logo.png")

export default function Navbar({client}: { client: Client }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState<boolean>(false);

  return (<div>
    <div
      className="h-20 w-full dark:bg-vortezz-gray1 bg-light-gray1 bg-light-gray1 fixed top-0 left-0 flex justify-between dark:text-vortezz-white text-vortezz-gray3 z-50">
      <h1 className="my-auto ml-8 font-bold text-xl flex"><img className="h-6 w-6 my-auto" src={logo}/> <span
        className="ml-2 my-auto">Vortezz</span></h1>
      <ul className="my-auto flex-row font-semibold text-l hidden md:flex">
        <Link to="/">
          <div
            className="mr-8 hover:text-vortezz-purple cursor-pointer text-xl">{client.getTranslation("navbar.about")}</div>
        </Link>
        <Link to="/contact">
          <div
            className="mr-8 hover:text-vortezz-purple cursor-pointer text-xl">{client.getTranslation("navbar.contact")}</div>
        </Link>
        <Link to="/github" target="_blank">
          <div className="mr-8 hover:text-vortezz-purple cursor-pointer text-xl">Github</div>
        </Link>
        <div className={"flex mr-4"}>
          <div className={`${client.getLanguage() === "fr" ? "bg-fr" : "bg-en"} w-7 h-[calc(28px)] mr-2 bg-no-repeat`}/>
          <i onClick={() => {
            setLanguageMenuOpen(prevState => !prevState);
          }}
             className={`bx bx-chevron-down text-xl cursor-pointer hover:text-vortezz-purple ${isLanguageMenuOpen && "rotate-180 translate-y-[calc(-0.250rem)]"}`}/>

          {isLanguageMenuOpen &&
            <div
              className={"dark:bg-vortezz-gray1 bg-light-gray1 -ml-[calc(0.5rem)] w-[calc(4.25rem)] absolute mt-8 z-50 rounded-b-md"}>
              <div onClick={() => {
                client.setLanguage("en");
                setLanguageMenuOpen(false);
              }} className={"flex cursor-pointer"}>
                <div className={"ml-auto my-auto bg-en w-6 h-6 mr-2 my-1"}/>
                <div className={"mr-auto my-auto hover:text-vortezz-purple"}>EN</div>
              </div>
              <div onClick={() => {
                client.setLanguage("fr");
                setLanguageMenuOpen(false);
              }} className={"flex cursor-pointer"}>
                <div className={"ml-auto my-auto bg-fr w-6 h-6 mr-2 my-1"}/>
                <div className={"mr-auto my-auto hover:text-vortezz-purple"}>FR</div>
              </div>
            </div>}
        </div>
        <i
          className={`bx ${client.isLightTheme() ? "bxs-moon" : "bxs-sun"} hover:text-vortezz-purple text-2xl my-auto mr-8 cursor-pointer`}
          onClick={() => {
            client.setLightTheme(!client.isLightTheme())
          }}></i>
      </ul>
      <div className="flex flex-col md:hidden my-auto mr-8 group pointer" onClick={() => {
        setIsMenuOpen(previous => !previous)
      }}>
        <div
          className={"w-5 m-[calc(0.1rem)] h-1 bg-vortezz-white rounded-full group-hover:bg-vortezz-purple" + (isMenuOpen ? " rotate-45 translate-y-[calc(0.435rem)]" : "")}/>
        <div
          className={"w-5 m-[calc(0.1rem)] h-1 bg-vortezz-white rounded-full group-hover:bg-vortezz-purple" + (isMenuOpen ? " opacity-0" : "")}/>
        <div
          className={"w-5 m-[calc(0.1rem)] h-1 bg-vortezz-white rounded-full group-hover:bg-vortezz-purple" + (isMenuOpen ? " -rotate-45 -translate-y-[calc(0.435rem)]" : "")}/>
      </div>
    </div>
    <ul
      className={"z-50 my-auto flex-col font-semibold text-l md:hidden fixed w-full dark:bg-vortezz-gray1 bg-light-gray1 top-20" + (isMenuOpen ? " flex opacity-1" : " hidden opacity-0")}>
      <Link to="/"
            className="w-full text-center dark:bg-vortezz-gray1 bg-light-gray1 dark:text-vortezz-white text-vortezz-gray-1 text-xl my-1">
        <li className="hover:text-vortezz-purple cursor-pointer">{client.getTranslation("navbar.about")}</li>
      </Link>
      <Link to="/contact"
            className="w-full text-center dark:bg-vortezz-gray1 bg-light-gray1 dark:text-vortezz-white text-vortezz-gray-1 text-xl my-1">
        <li className="hover:text-vortezz-purple cursor-pointer">{client.getTranslation("navbar.contact")}</li>
      </Link>
      <Link to="/github" target="_blank"
            className="w-full text-center dark:bg-vortezz-gray1 bg-light-gray1 dark:text-vortezz-white text-vortezz-gray-1 text-xl my-1 mb-4">
        <li className="hover:text-vortezz-purple cursor-pointer">Github</li>
      </Link>
    </ul>
    <div className="h-20 w-1"></div>
  </div>)
}
