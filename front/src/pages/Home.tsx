import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Skills from "../components/home/Skills";
import Wave from "../components/Wave";
import Who from "../components/home/Who";
import Projects from "../components/home/Projects";
import language from "../language";
import {ReactChild, ReactFragment, ReactPortal} from "react";
import Client from "../struct/Client";

export default function Home({client}: { client: Client }) {
  const frenchTranslation = client.getTranslation("about.welcome.french");
  const french = new RegExp(`.{${Math.ceil(frenchTranslation.length / 3)}}`, 'g');
  const pieces = frenchTranslation.match(french);
  const frenchArray: any[] = []

  if (pieces != null) {
    const accumulated = pieces.length * Math.ceil(frenchTranslation.length / 3)
    const modulo = frenchTranslation.length % accumulated;
    if (modulo) {
      pieces.push(frenchTranslation.slice(accumulated));
    }
  }

  pieces?.forEach(value => {
    frenchArray.push(value)
  })

  return (
    <div className="h-screen w-full dark:bg-vortezz-gray2 bg-light-gray2 min-height-full">
      <Navbar client={client}/>
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold dark:text-vortezz-white text-vortezz-gray-1 text-center mt-6 group">👋 {client.getTranslation("about.welcome.hey")}&nbsp;
        <span className="group-hover:text-vortezz-purple">Vortezz</span>,</h1>
      <h2
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-vortezz-white text-center mt-2 group">{client.getTranslation("about.welcome.prefix")}&nbsp;
        <span className="group"><span className="group-hover:text-social-discord">{frenchArray[0]}</span><span
          className="group-hover:text-vortezz-white">{frenchArray[1]}</span><span
          className="group-hover:text-social-youtube">{frenchArray[2]}</span></span>{client.getTranslation("about.welcome.suffix") && " "}{client.getTranslation("about.welcome.suffix")}.
      </h2>
      {Wave(1)}
      <Who client={client}/>
      {Wave(2)}
      <Skills client={client}/>
      {Wave(1)}
      <Projects client={client}/>
      {Wave(3)}
      <Footer client={client}/>
    </div>
  )
}
