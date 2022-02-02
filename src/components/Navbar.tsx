import { useState } from "react";
import { Link } from "react-router-dom";
import language from "../language";

const logo = require("../assets/pictures/logo.png")

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (<div>
        <div className="h-20 w-full bg-vortezz-gray1 fixed top-0 left-0 flex justify-between text-vortezz-white z-50">
            <h1 className="my-auto ml-8 font-bold text-xl flex"><img className="h-6 w-6 my-auto" src={logo} /> <span className="ml-2 my-auto">Vortezz</span></h1>
            <ul className="my-auto flex-row font-semibold text-l hidden md:flex">
                <Link to="/">
                    <li className="mr-8 hover:text-vortezz-purple cursor-pointer text-xl">{language.NAVBAR.ABOUT}</li>
                </Link>
                <Link to="/contact">
                    <li className="mr-8 hover:text-vortezz-purple cursor-pointer text-xl">{language.NAVBAR.CONTACT}</li>
                </Link>
                <Link to="/github" target="_blank">
                    <li className="mr-8 hover:text-vortezz-purple cursor-pointer text-xl">Github</li>
                </Link>
            </ul>
            <div className="flex flex-col md:hidden my-auto mr-8 group pointer" onClick={() => { setIsMenuOpen(previous => !previous) }}>
                <div className={"w-5 m-[calc(0.1rem)] h-1 bg-vortezz-white rounded-full group-hover:bg-vortezz-purple" + (isMenuOpen ? " rotate-45 translate-y-[calc(0.435rem)]" : "")}></div>
                <div className={"w-5 m-[calc(0.1rem)] h-1 bg-vortezz-white rounded-full group-hover:bg-vortezz-purple" + (isMenuOpen ? " opacity-0" : "")}></div>
                <div className={"w-5 m-[calc(0.1rem)] h-1 bg-vortezz-white rounded-full group-hover:bg-vortezz-purple" + (isMenuOpen ? " -rotate-45 -translate-y-[calc(0.435rem)]" : "")}></div>
            </div>
        </div>
        <ul className={"z-50 my-auto flex-col font-semibold text-l md:hidden fixed w-full mb-4 bg-vortezz-gray1 top-20" + (isMenuOpen ? " flex opacity-1" : " hidden opacity-0")}>
            <Link to="/" className="w-full text-center bg-vortezz-gray1 text-vortezz-white text-xl">
                <li className="hover:text-vortezz-purple cursor-pointer">{language.NAVBAR.ABOUT}</li>
            </Link>
            <Link to="/contact" className="w-full text-center bg-vortezz-gray1 text-vortezz-white text-xl">
                <li className="hover:text-vortezz-purple cursor-pointer">{language.NAVBAR.CONTACT}</li>
            </Link>
            <Link to="/github" target="_blank" className="w-full text-center bg-vortezz-gray1 text-vortezz-white text-xl">
                <li className="hover:text-vortezz-purple cursor-pointer">Github</li>
            </Link>
            <div className="w-full text-center bg-vortezz-gray1 text-vortezz-white text-xl">
                <li className="hover:text-vortezz-purple cursor-pointer">ㅤ</li>
            </div>
        </ul>
        <div className="h-20 w-1"></div>
    </div >)
}