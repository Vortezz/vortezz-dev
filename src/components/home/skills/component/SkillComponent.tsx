export default function SkillComponent({icon, name, color}: Props) {
    return (
        <div className="flex mx-auto flex-row max-w-[calc(20rem)] w-[calc(90%)] m-auto justify-center my-4">
            <div className={`bg-vortezz-${color} h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex my-auto`}>
                <i className={`${icon} text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-6xl 2xl:text-6xl m-auto`}/>
            </div>
            <div className="ml-4 flex flex flex-col justify-around">
                <p className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold sm:m-1 lg:m-2 text-left">{name}</p>
            </div>
        </div>
    )
}

interface Props {
    icon: string;
    name: string;
    color: string;
}