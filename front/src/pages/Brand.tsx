import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";
import Client from "../struct/Client";

export default function Brand({client}: { client: Client }) {

  return (
    <div className="h-screen w-full dark:bg-vortezz-gray2 bg-light-gray2 overflow-y-auto min-height-full">
      <Navbar client={client}/>
      <h1
        className="py-4 text-center bg-light-gray2 text-vortezz-gray1 font-extrabold text-7xl dark:bg-vortezz-gray2 dark:text-vortezz-white">{client.getTranslation("branding.title")}</h1>
      <div className="w-full dark:bg-vortezz-gray2 dark:text-vortezz-white p-2">
        <div className="w-[calc(90%)] m-auto flex justify-around flex-wrap">
          <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
            <div
              className="relative min-h-[calc(8rem)] w-32 bg-vortezz-purple rounded-2xl group">
              <h1
                className="absolute top-1 left-2 opacity-0 dark:text-vortezz-white text-vortezz-gray-1 group-hover:opacity-100 cursor-pointer">#8B5CF6</h1>
            </div>
            <div
              className="my-auto mx-4 w-80 dark:text-vortezz-white text-vortezz-gray-1 p-1">{client.getTranslation("branding.colors.purple")}</div>
          </div>
          <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
            <div className="relative min-h-[calc(8rem)] w-32 bg-vortezz-red rounded-2xl group">
              <h1
                className="absolute top-1 left-2 opacity-0 dark:text-vortezz-white text-vortezz-gray-1 group-hover:opacity-100 cursor-pointer">#EC2C44</h1>
            </div>
            <div
              className="my-auto mx-4 w-80 dark:text-vortezz-white text-vortezz-gray-1 p-1">{client.getTranslation("branding.colors.red")}</div>
          </div>
        </div>
      </div>
      <Wave variant={1} client={client}/>
      <div className="w-full dark:bg-vortezz-gray3 bg-light-gray3">
        <div className="w-[calc(90%)] m-auto flex justify-around py-2 flex-wrap">
          <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
            <div
              className="my-auto mx-4 w-80 dark:text-vortezz-white text-vortezz-gray-1 p-1 text-right">{client.getTranslation("branding.colors.yellow")}</div>
            <div className="relative min-h-[calc(8rem)] w-32 bg-cvortezz-purple rounded-2xl group">
              <h1
                className="absolute top-1 left-2 opacity-0 dark:text-vortezz-white text-vortezz-gray-1 group-hover:opacity-100 cursor-pointer">#FFB82B</h1>
            </div>
          </div>
          <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
            <div
              className="my-auto mx-4 w-80 dark:text-vortezz-white text-vortezz-gray-1 p-1 text-right">{client.getTranslation("branding.colors.green")}</div>
            <div className="relative min-h-[calc(8rem)] w-32 bg-cvortezz-red rounded-2xl group">
              <h1
                className="absolute top-1 left-2 opacity-0 dark:text-vortezz-white text-vortezz-gray-1 group-hover:opacity-100 cursor-pointer">#31B134</h1>
            </div>
          </div>
        </div>
      </div>
      <Wave variant={2} client={client}/>
      <div className="w-[calc(90%)] m-auto flex justify-around py-2 flex-wrap">
        <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
          <div className="relative min-h-[calc(8rem)] w-32 bg-vortezz-white rounded-2xl group">
            <h1
              className="absolute top-1 left-2 opacity-0 text-vortezz-gray1 group-hover:opacity-100 cursor-pointer">#FFFFFF</h1>
          </div>
          <div
            className="my-auto mx-4 w-80 dark:text-vortezz-white text-vortezz-gray-1 p-1 text-left">{client.getTranslation("branding.colors.white")}</div>
        </div>
        <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
          <div className="relative min-h-[calc(8rem)] w-32 bg-vortezz-gray1 rounded-2xl group">
            <h1
              className="absolute top-1 left-2 opacity-0 dark:text-vortezz-white text-vortezz-gray-1 group-hover:opacity-100 cursor-pointer">#292727</h1>
          </div>
          <div
            className="my-auto mx-4 w-80 dark:text-vortezz-white text-vortezz-gray-1 p-1 text-left">{client.getTranslation("branding.colors.gray1")}</div>
        </div>
      </div>
      <Wave variant={1} client={client}/>
      <div className="w-full dark:bg-vortezz-gray3 bg-light-gray3">
        <div className="w-[calc(90%)] m-auto flex justify-around flex-wrap">
          <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
            <div
              className="my-auto mx-4 w-80 dark:text-vortezz-white text-vortezz-gray-1 p-1">{client.getTranslation("branding.colors.gray2")}</div>
            <div className="relative min-h-[calc(8rem)] w-32 bg-vortezz-gray2 rounded-2xl group">
              <h1
                className="absolute top-1 left-2 opacity-0 dark:text-vortezz-white text-vortezz-gray-1 group-hover:opacity-100 cursor-pointer">#363535</h1>
            </div>
          </div>
          <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
            <div
              className="my-auto mx-4 w-80 dark:text-vortezz-white text-vortezz-gray-1 p-1">{client.getTranslation("branding.colors.gray3")}</div>
            <div className="relative min-h-[calc(8rem)] w-32 bg-vortezz-gray3 rounded-2xl group">
              <h1
                className="absolute top-1 left-2 opacity-0 dark:text-vortezz-white text-vortezz-gray-1 group-hover:opacity-100 cursor-pointer">#464545</h1>
            </div>
          </div>
        </div>
      </div>
      <Wave variant={3} client={client}/>
      <Footer client={client}/>
    </div>)
}
