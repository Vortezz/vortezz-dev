import SkillComponent from "./component/SkillComponent";

export default function Frameworks() {
  return (
    <div className="flex flex-wrap w-[calc(90%)] m-auto justify-around">
      <SkillComponent icon={"bx bxl-flutter"} name={"Flutter"} color={"purple"}/>
      <SkillComponent icon={"bx bxl-nodejs"} name={"Node.JS"} color={"red"}/>
      <SkillComponent icon={"bx bxl-react"} name={"React"} color={"purple"}/>
      <SkillComponent icon={"bx bxl-tailwind-css"} name={"Tailwind CSS"} color={"red"}/>
    </div>
  )
}
