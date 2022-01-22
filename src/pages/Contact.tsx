import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Form from "../components/home/contact/Form";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";

export default function Contact() {
    return (
        <div className="h-screen w-full bg-vortezz-gray2 top-0 left-0">
            <Navbar />
            <h1 className="text-5xl font-extrabold text-vortezz-white text-center mt-6 group">Contact</h1>
            <h2 className="text-2xl font-semibold text-vortezz-white text-center mt-2 group">You have a question, want to know more about something ? You are in the right place !</h2>
            <h2 className="text-xl text-vortezz-white text-center mt-2 group">You can contact me using <Link to="/twitter" target="_blank">Twitter</Link> or <Link to="/discord" target="_blank">Discord</Link>. You can also contact me by sending an email to <a href="mailto:contact@vortezz.dev">contact@vortezz.dev</a> or by filling the form below.</h2>
            {Wave(1)}
            <Form />
            {Wave(3)}
            <Footer />
        </div>
    )
}