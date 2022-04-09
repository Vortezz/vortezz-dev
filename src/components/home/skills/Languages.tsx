import SkillComponent from "./component/SkillComponent";

export default function Languages() {
    return (
        <div className="flex flex-wrap w-[calc(90%)] m-auto justify-around">
            <SkillComponent icon={"bx bxl-html5"} name={"HTML"} color={"purple"}/>
            <SkillComponent icon={"bx bxl-css3"} name={"CSS"} color={"red"}/>
            <SkillComponent icon={"bx bxl-javascript"} name={"JS/TS"} color={"purple"}/>
            <SkillComponent icon={"bx bxl-java"} name={"Java"} color={"red"}/>
            <SkillComponent icon={"bx bxs-data"} name={"SQL"} color={"purple"}/>
        </div>
    )
}