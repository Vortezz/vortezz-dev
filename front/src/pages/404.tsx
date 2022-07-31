import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";
import Client from "../struct/Client";

export default function Error404({client}: { client: Client }) {
  return (
    <div>
      <div className="w-full dark:bg-vortezz-gray2 bg-light-gray2 min-h-[calc(90%)]">
        <Navbar client={client}/>
        <div className="m-auto text-center h-[calc(100%-5rem)] flex justify-around">
          <div className="mx-auto">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold dark:text-vortezz-white text-vortezz-gray-1">
              <span className="text-vortezz-purple">4</span>0<span className="text-vortezz-purple">4</span></h1>
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl dark:text-vortezz-white text-vortezz-gray-1">{client.getTranslation("404.notfound")}</p>
          </div>
        </div>
      </div>
      <Wave variant={4} client={client}/>
      <Footer client={client}/>
    </div>
  )
}
