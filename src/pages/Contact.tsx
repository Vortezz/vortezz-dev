import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Form from "../components/home/contact/Form";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";
import language from "../language";

export default function Contact() {
    return (
        <div className="h-screen w-full bg-vortezz-gray2 top-0 left-0">
            <Navbar />
            <h1 className="text-5xl font-extrabold text-vortezz-white text-center mt-6 group">{language.CONTACT.TITLE}</h1>
            <h2 className="text-2xl font-semibold text-vortezz-white text-center mt-2 group">{language.CONTACT.TITLE2}</h2>
            <h2 className="text-xl text-vortezz-white text-center mt-2 group">{language.CONTACT.CONTACT_WAYS.USING} <Link to="/twitter" target="_blank">Twitter</Link> {language.CONTACT.CONTACT_WAYS.OR} <Link to="/discord" target="_blank">Discord</Link>. {language.CONTACT.CONTACT_WAYS.ALSO} <a href="mailto:contact@vortezz.dev">contact@vortezz.dev</a> {language.CONTACT.CONTACT_WAYS.FORMFILL}</h2>
            {Wave(1)}
            <Form />
            {Wave(3)}
            <Footer />
        </div>
    )
}