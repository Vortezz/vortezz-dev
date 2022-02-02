import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";
import language from "../language";

export default function Error404() {
    return (
        <div>
            <div className="w-full bg-vortezz-gray2 min-h-[calc(90%)]">
                <Navbar />
                <div className="m-auto text-center h-[calc(100%-5rem)] flex justify-around">
                    <div className="mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold text-vortezz-white"><span className="text-vortezz-purple">4</span>0<span className="text-vortezz-purple">4</span></h1>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-vortezz-white">{language.PAGE_404}</p>
                    </div>
                </div>
            </div>
            {Wave(4)}
            <Footer />
        </div>
    )
}