import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Skills from "../components/home/Skills";
import Wave from "../components/Wave";
import Who from "../components/home/Who";
import Projects from "../components/home/Projects";
import language from "../language";
import { ReactChild, ReactFragment, ReactPortal } from "react";

export default function Home() {
    const french = new RegExp(`.{${Math.ceil(language.ABOUT.WELCOME.FRENCH.length / 3)}}`, 'g');
    const pieces = language.ABOUT.WELCOME.FRENCH.match(french);
    let frenchArray: any[] = []
    if (pieces != null) {
        const accumulated = pieces.length * Math.ceil(language.ABOUT.WELCOME.FRENCH.length / 3)
        const modulo = language.ABOUT.WELCOME.FRENCH.length % accumulated;
        if (modulo) { pieces.push(language.ABOUT.WELCOME.FRENCH.slice(accumulated)); }
    }
    pieces?.forEach(value => {
        frenchArray.push(value)
    })

    return (
        <div className="h-screen w-full bg-vortezz-gray2 min-height-full">
            <Navbar />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-vortezz-white text-center mt-6 group">👋 {language.ABOUT.WELCOME.HEY} <span className="group-hover:text-vortezz-purple">Vortezz</span>,</h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-vortezz-white text-center mt-2 group">{language.ABOUT.WELCOME.PREFIX} <span className="group"><span className="group-hover:text-social-discord">{frenchArray[0]}</span><span className="group-hover:text-vortezz-white">{frenchArray[1]}</span><span className="group-hover:text-social-youtube">{frenchArray[2]}</span></span> {language.ABOUT.WELCOME.SUFFIX}.</h2>
            {Wave(1)}
            <Who />
            {Wave(2)}
            <Skills />
            {Wave(1)}
            <Projects />
            {Wave(3)}
            <Footer />
        </div>
    )
}