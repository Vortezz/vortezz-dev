import SkillComponent from "./component/SkillComponent";
import Client from "../../../struct/Client";

export default function Others({client}: { client: Client }) {
  return (
    <div className="flex flex-wrap w-[calc(90%)] m-auto justify-around">
      <SkillComponent icon={"bx bxl-tux"} name={client.getTranslation("about.skills.others.unix")} color={"purple"}/>
      <SkillComponent icon={"bx bxl-git"} name={"Git"} color={"red"}/>
      <SkillComponent icon={"bx bxl-docker"} name={"Docker"} color={"purple"}/>
      <SkillComponent icon={"bx bxs-user-voice"} name={client.getTranslation("about.skills.others.english")} color={"red"}/>
    </div>
  )
}
