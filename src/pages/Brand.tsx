import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";

export default function Brand() {

    return (
        <div className="h-screen w-full bg-vortezz-gray2 overflow-y-auto min-height-full">
            <Navbar />
            <h1 className="py-4 text-center text-vortezz-white font-extrabold text-7xl dark:bg-vortezz-white dark:text-vortezz-gray1">Branding</h1>
            <div className="w-full dark:bg-vortezz-white p-2">
                <div className="w-[calc(90%)] m-auto flex justify-around flex-wrap">
                    <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
                        <div className="relative min-h-[calc(8rem)] w-32 bg-vortezz-purple rounded-2xl group dark:bg-cvortezz-purple">
                            <h1 className="absolute top-1 left-2 opacity-0 text-vortezz-white group-hover:opacity-100 cursor-pointer">#8B5CF6</h1>
                        </div>
                        <div className="my-auto mx-4 w-80 text-vortezz-white p-1 dark:text-vortezz-gray1">Purple is one of the main colors of this graphic charter. Furthermore, purple can be used in titles, subtitles and in the background.</div>
                    </div>
                    <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
                        <div className="relative min-h-[calc(8rem)] w-32 bg-vortezz-red rounded-2xl group dark:bg-cvortezz-red">
                            <h1 className="absolute top-1 left-2 opacity-0 text-vortezz-white group-hover:opacity-100 cursor-pointer">#EC2C44</h1>
                        </div>
                        <div className="my-auto mx-4 w-80 text-vortezz-white p-1 dark:text-vortezz-gray1">Red is a great match with purple. Indeed, they bring together color to the graphic charter. Red can be used everywhere except in titles.</div>
                    </div>
                </div>
            </div>
            {Wave(1)}
            <div className="w-full bg-vortezz-gray3">
                <div className="w-[calc(90%)] m-auto flex justify-around py-2 flex-wrap">
                    <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
                        <div className="my-auto mx-4 w-80 text-vortezz-white p-1 text-right">Yellow is purple complementary color. Yellow can be used sometimes, but always to emphasis purple.</div>
                        <div className="relative min-h-[calc(8rem)] w-32 bg-cvortezz-purple rounded-2xl group">
                            <h1 className="absolute top-1 left-2 opacity-0 text-vortezz-white group-hover:opacity-100 cursor-pointer">#FFB82B</h1>
                        </div>
                    </div>
                    <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
                        <div className="my-auto mx-4 w-80 text-vortezz-white p-1 text-right">Green is red complementary color. Green can be used in background, but will be used mainly to emphasis red.</div>
                        <div className="relative min-h-[calc(8rem)] w-32 bg-cvortezz-red rounded-2xl group">
                            <h1 className="absolute top-1 left-2 opacity-0 text-vortezz-white group-hover:opacity-100 cursor-pointer">#31B134</h1>
                        </div>
                    </div>
                </div>
            </div>
            {Wave(2)}
            <div className="w-[calc(90%)] m-auto flex justify-around py-2 flex-wrap">
                <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
                    <div className="relative min-h-[calc(8rem)] w-32 bg-vortezz-white rounded-2xl group">
                        <h1 className="absolute top-1 left-2 opacity-0 text-vortezz-gray1 group-hover:opacity-100 cursor-pointer">#FFFFFF</h1>
                    </div>
                    <div className="my-auto mx-4 w-80 text-vortezz-white p-1 text-left">White is the third dominating color and helps to give brightness. That's why white can be used in texts, titles and in the background.</div>
                </div>
                <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
                    <div className="relative min-h-[calc(8rem)] w-32 bg-vortezz-gray1 rounded-2xl group">
                        <h1 className="absolute top-1 left-2 opacity-0 text-vortezz-white group-hover:opacity-100 cursor-pointer">#292727</h1>
                    </div>
                    <div className="my-auto mx-4 w-80 text-vortezz-white p-1 text-left">Dark gray contrasts and highlights white. It's the default background color but can be replaced with white if needed. So, dark gray can be used for texts and titles.</div>
                </div>
            </div>
            {Wave(1)}
            <div className="w-full bg-vortezz-gray3">
                <div className="w-[calc(90%)] m-auto flex justify-around flex-wrap">
                    <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
                        <div className="my-auto mx-4 w-80 text-vortezz-white p-1">Gray can be used in background when you need another background color.</div>
                        <div className="relative min-h-[calc(8rem)] w-32 bg-vortezz-gray2 rounded-2xl group">
                            <h1 className="absolute top-1 left-2 opacity-0 text-vortezz-white group-hover:opacity-100 cursor-pointer">#363535</h1>
                        </div>
                    </div>
                    <div className="flex w-[calc(95%)] max-w-[calc(30rem)] m-2">
                        <div className="my-auto mx-4 w-80 text-vortezz-white p-1">Gray can be used in background when you need another background color.</div>
                        <div className="relative min-h-[calc(8rem)] w-32 bg-vortezz-gray3 rounded-2xl group">
                            <h1 className="absolute top-1 left-2 opacity-0 text-vortezz-white group-hover:opacity-100 cursor-pointer">#464545</h1>
                        </div>
                    </div>
                </div>
            </div>
            {Wave(3)}
            <Footer />
        </div >)
}