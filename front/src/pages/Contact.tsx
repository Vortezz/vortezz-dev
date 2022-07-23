import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import Form from "../components/contact/Form";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";
import language from "../language";
import Client from "../struct/Client";

export default function Contact({client}: { client: Client }) {
  return (
    <div className="h-screen w-full bg-vortezz-gray2 top-0 left-0">
      <Navbar client={client}/>
      <h1
        className="text-5xl font-extrabold text-vortezz-white text-center mt-6 group">{client.getTranslation("contact.title")}</h1>
      <h2
        className="text-2xl font-semibold text-vortezz-white text-center mt-2 group">{client.getTranslation("contact.title2")}</h2>
      <h2
        className="text-xl text-vortezz-white text-center mt-2 group">{client.getTranslation("contact.ways.using")}&nbsp;
        <Link
          to="/twitter" target="_blank">Twitter</Link> {client.getTranslation("contact.ways.or")} <Link to="/discord"
                                                                                                        target="_blank">Discord</Link>. {client.getTranslation("contact.ways.also")}&nbsp;
        <a href="mailto:contact@vortezz.dev">contact@vortezz.dev</a> {client.getTranslation("contact.ways.form")}</h2>
      {Wave(1)}
      <Form client={client}/>
      {Wave(3)}
      <Footer client={client}/>
    </div>
  )
}
