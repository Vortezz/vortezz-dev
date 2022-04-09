import SkillComponent from "./component/SkillComponent";

export default function Others() {
    return (
        <div className="flex flex-wrap w-[calc(90%)] m-auto justify-around">
            <SkillComponent icon={"bx bxl-tux"} name={"Unix Systems"} color={"purple"}/>
            <SkillComponent icon={"bx bxl-git"} name={"Git"} color={"red"}/>
        </div>
    )
}