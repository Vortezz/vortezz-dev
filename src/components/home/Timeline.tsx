import language from "../../language";

export default function Timeline() {
    return (<div className="flex flex-col md:grid grid-cols-9 mx-auto p-8 text-blue-50">
        <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-vortezz-white pointer-events-none">
                        <i className='bx bxs-up-arrow text-center mx-auto col-start-5 col-end-6 text-4xl -mb-4 absolute -top-6 -right-[calc(0.4rem)]'></i>
                    </div>
                </div>
                <div className="w-12 h-12 absolute top-1/2 -mt-6 -ml-3 rounded-full bg-vortezz-red shadow flex"><i className='bx bxs-calendar m-auto text-3xl' ></i></div>
            </div>
            <div className="bg-vortezz-red col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">2022</h3>
                <p className="leading-tight text-left">
                    {language.ABOUT.TIMELINE.YEAR_2022}
                </p>
            </div>
        </div>
        <div className="flex flex-row-reverse md:contents">
            <div className="bg-vortezz-purple col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">2021</h3>
                <p className="leading-tight text-left">
                    {language.ABOUT.TIMELINE.YEAR_2021}
                </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-vortezz-white pointer-events-none"></div>
                </div>
                <div className="w-12 h-12 absolute top-1/2 -mt-6 -ml-3 rounded-full bg-vortezz-purple shadow flex">
                    <i className='bx bxl-flutter m-auto text-3xl'></i>
                </div>
            </div>
        </div>
        <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-vortezz-white pointer-events-none"></div>
                </div>
                <div className="w-12 h-12 absolute top-1/2 -mt-6 -ml-3 rounded-full bg-vortezz-red shadow flex"><i className='bx bxs-virus m-auto text-3xl' ></i></div>
            </div>
            <div className="bg-vortezz-red col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">2020</h3>
                <p className="leading-tight text-left">
                    {language.ABOUT.TIMELINE.YEAR_2020}
                </p>
            </div>
        </div>
        <div className="flex flex-row-reverse md:contents">
            <div className="bg-vortezz-purple col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">2019</h3>
                <p className="leading-tight text-left">
                    {language.ABOUT.TIMELINE.YEAR_2019}
                </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-vortezz-white pointer-events-none"></div>
                </div>
                <div className="w-12 h-12 absolute top-1/2 -mt-6 -ml-3 rounded-full bg-vortezz-purple shadow flex">
                    <i className='bx bxl-html5 m-auto text-3xl'></i>
                </div>
            </div>
        </div>
        <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-vortezz-white pointer-events-none"></div>
                </div>
                <div className="w-12 h-12 absolute top-1/2 -mt-6 -ml-3 rounded-full bg-vortezz-red shadow flex"><i className='bx bxl-python m-auto text-3xl' ></i></div>
            </div>
            <div className="bg-vortezz-red col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">2018</h3>
                <p className="leading-tight text-left">
                    {language.ABOUT.TIMELINE.YEAR_2018}
                </p>
            </div>
        </div>
        <div className="flex flex-row-reverse md:contents">
            <div className="bg-vortezz-purple col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">2017</h3>
                <p className="leading-tight text-left">
                    {language.ABOUT.TIMELINE.YEAR_2017}
                </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-vortezz-white pointer-events-none"></div>
                </div>
                <div className="w-12 h-12 absolute top-1/2 -mt-6 -ml-3 rounded-full bg-vortezz-purple shadow flex">
                    <i className='bx bxs-slideshow m-auto text-3xl'></i>
                </div>
            </div>
        </div>
        <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-vortezz-white pointer-events-none"></div>
                </div>
                <div className="w-12 h-12 absolute top-1/2 -mt-6 -ml-3 rounded-full bg-vortezz-red shadow flex"><i className='bx bxs-invader m-auto text-3xl' ></i></div>
            </div>
            <div className="bg-vortezz-red col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">2006 - 2016</h3>
                <p className="leading-tight text-left">
                    {language.ABOUT.TIMELINE.CHILDHOOD}
                </p>
            </div>
        </div>
        <div className="flex flex-row-reverse md:contents">
            <div className="bg-vortezz-purple col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">{language.ABOUT.TIMELINE.BORN.DATE}</h3>
                <p className="leading-tight text-left">{language.ABOUT.TIMELINE.BORN.DESC}</p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-[calc(60%)] top-1/2 w-6 flex items-center justify-center">
                    <div className="h-full bottom-[calc(45%)] absolute w-1 bg-vortezz-white pointer-events-none"></div>
                </div>
                <div className="w-12 h-12 absolute top-1/2 -mt-6 -ml-3 rounded-full bg-vortezz-purple shadow flex">
                    <i className='bx bxs-baby-carriage m-auto text-3xl'></i>
                </div>
            </div>
        </div>
        <div className="flex md:contents">
        </div>
    </div>)
}