export default function Languages() {
    return (
        <div className="flex flex-wrap w-[calc(90%)] m-auto justify-around">
            <div className="flex mx-auto flex-row max-w-[calc(20rem)] w-[calc(90%)] m-auto justify-center my-4">
                <div className="bg-vortezz-purple h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex my-auto">
                    <i className='bx bxl-html5 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-6xl 2xl:text-6xl m-auto' ></i>
                </div>
                <div className="ml-8 flex w-2/3 flex flex-col justify-around">
                    <p className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold sm:m-1 lg:m-2 text-left">HTML</p>
                    <div className='bg-vortezz-gray3 w-full h-4 rounded-full'>
                        <div className='bg-vortezz-purple w-5/6 h-full rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className="flex mx-auto flex-row max-w-[calc(20rem)] w-[calc(90%)] m-auto justify-center my-4">
                <div className="bg-vortezz-red h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex my-auto">
                    <i className='bx bxl-css3 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-6xl 2xl:text-6xl m-auto' ></i>
                </div>
                <div className="ml-8 flex w-2/3 flex flex-col justify-around">
                    <p className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold sm:m-1 lg:m-2 text-left">CSS</p>
                    <div className='bg-vortezz-gray3 w-full h-4 rounded-full'>
                        <div className='bg-vortezz-red w-1/2 h-full rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className="flex mx-auto flex-row max-w-[calc(20rem)] w-[calc(90%)] m-auto justify-center my-4">
                <div className="bg-vortezz-purple h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex my-auto">
                    <i className='bx bxl-javascript text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-6xl 2xl:text-6xl m-auto' ></i>
                </div>
                <div className="ml-8 flex w-2/3 flex flex-col justify-around">
                    <p className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold sm:m-1 lg:m-2 text-left">JS/TS</p>
                    <div className='bg-vortezz-gray3 w-full h-4 rounded-full'>
                        <div className='bg-vortezz-purple w-4/6 h-full rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className="flex mx-auto flex-row max-w-[calc(20rem)] w-[calc(90%)] m-auto justify-center my-4">
                <div className="bg-vortezz-red h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex my-auto">
                    <i className='bx bxl-java text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-6xl 2xl:text-6xl m-auto' ></i>
                </div>
                <div className="ml-8 flex w-2/3 flex flex-col justify-around">
                    <p className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold sm:m-1 lg:m-2 text-left">Java</p>
                    <div className='bg-vortezz-gray3 w-full h-4 rounded-full'>
                        <div className='bg-vortezz-red w-3/5 h-full rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className="flex mx-auto flex-row max-w-[calc(20rem)] w-[calc(90%)] m-auto justify-center my-4">
                <div className="bg-vortezz-purple h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex my-auto">
                    <i className='bx bxs-data text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-6xl 2xl:text-6xl m-auto' ></i>
                </div>
                <div className="ml-8 flex w-2/3 flex flex-col justify-around">
                    <p className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold sm:m-1 lg:m-2 text-left">SQL</p>
                    <div className='bg-vortezz-gray3 w-full h-4 rounded-full'>
                        <div className='bg-vortezz-purple w-3/5 h-full rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}