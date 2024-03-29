export function BottomLeftTimelineComponent({icon, title, description}: Props) {
  return (
    <div className="flex flex-row-reverse md:contents z-0">
      <div
        className="bg-vortezz-purple col-start-1 col-end-5 p-4 rounded-lg my-4 lg:ml-auto lg:mr-0 mr-auto shadow-md">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="leading-tight text-center">
          {description}
        </p>
      </div>
      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div className="h-[calc(60%)] top-1/2 w-6 flex items-center justify-center">
          <div
            className="h-[calc(60%)] bottom-[calc(45%)] absolute w-1 dark:bg-vortezz-white bg-vortezz-gray1 pointer-events-none"/>
        </div>
        <div className="w-12 h-12 absolute top-1/2 -mt-6 -ml-3 rounded-full bg-vortezz-purple shadow flex">
          <i className={`${icon} m-auto text-3xl`}/>
        </div>
      </div>
    </div>
  )
}

export function LeftTimelineComponent({icon, title, description}: Props) {
  return (
    <div className="flex flex-row-reverse md:contents z-10">
      <div
        className="bg-vortezz-purple col-start-1 col-end-5 p-4 rounded-lg my-4 lg:ml-auto lg:mr-0 mr-auto shadow-md">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="leading-tight text-center">
          {description}
        </p>
      </div>
      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 dark:bg-vortezz-white bg-vortezz-gray1 pointer-events-none"/>
        </div>
        <div className="w-12 h-12 absolute top-1/2 -mt-6 -ml-3 rounded-full bg-vortezz-purple shadow flex">
          <i className={`${icon} m-auto text-3xl`}/>
        </div>
      </div>
    </div>
  )
}

export function TopRightTimelineComponent({icon, title, description}: Props) {
  return (
    <div className="flex md:contents z-10">
      <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 dark:bg-vortezz-white bg-vortezz-gray1 pointer-events-none">
            <i
              className="bx bxs-up-arrow text-center mx-auto col-start-5 col-end-6 text-4xl -mb-4 absolute dark:text-vortezz-white text-vortezz-gray1 -top-6 -right-[calc(0.4rem)]"/>
          </div>
        </div>
        <div className="w-12 h-12 absolute top-1/2 -mt-6 -ml-3 rounded-full bg-vortezz-red shadow flex">
          <i className={`${icon} m-auto text-3xl`}/>
        </div>
      </div>
      <div className="bg-vortezz-red col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="leading-tight text-center">
          {description}
        </p>
      </div>
    </div>
  )
}

export function RightTimelineComponent({icon, title, description}: Props) {
  return (
    <div className="flex md:contents z-10">
      <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 dark:bg-vortezz-white bg-vortezz-gray1 pointer-events-none"/>
        </div>
        <div className="w-12 h-12 absolute top-1/2 -mt-6 -ml-3 rounded-full bg-vortezz-red shadow flex">
          <i className={`${icon} m-auto text-3xl`}/>
        </div>
      </div>
      <div className="bg-vortezz-red col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="leading-tight text-center">
          {description}
        </p>
      </div>
    </div>
  )
}

interface Props {
  icon: string;
  title: string;
  description: string;
}
