import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Form from "../components/contact/Form";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";
import Client from "../struct/Client";

export default function Contact({client}: { client: Client }) {
  return (
    <div className="h-screen w-full dark:bg-vortezz-gray2 bg-light-gray2 top-0 left-0">
      <Navbar client={client}/>
      <h1
        className="text-5xl font-extrabold dark:text-vortezz-white text-vortezz-gray-1 text-center mt-6 group">{client.getTranslation("contact.title")}</h1>
      <h2
        className="text-2xl font-semibold dark:text-vortezz-white text-vortezz-gray-1 text-center mt-2 group">{client.getTranslation("contact.title2")}</h2>
      <h2
        className="text-xl dark:text-vortezz-white text-vortezz-gray-1 text-center mt-2 group">{client.getTranslation("contact.ways.using")}&nbsp;
        <Link
          to="/twitter" target="_blank">Twitter</Link> {client.getTranslation("contact.ways.or")} <Link to="/discord"
                                                                                                        target="_blank">Discord</Link>. {client.getTranslation("contact.ways.also")}&nbsp;
        <a href="mailto:contact@vortezz.dev">contact@vortezz.dev</a>{client.getTranslation("contact.ways.phone")} <a
          href={"tel:+33652220852"}>+33652220852</a> {client.getTranslation("contact.ways.form")}</h2>
      <Wave variant={1} client={client}/>
      <Form client={client}/>
      <Wave variant={3} client={client}/>
      <Footer client={client}/>
    </div>
  )
}
