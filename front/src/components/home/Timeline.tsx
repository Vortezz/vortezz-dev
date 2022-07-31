import {
  BottomLeftTimelineComponent,
  LeftTimelineComponent,
  RightTimelineComponent,
  TopRightTimelineComponent,
} from "./components/TimelineComponent";
import Client from "../../struct/Client";

export default function Timeline({client}: { client: Client }) {
  return (<div className="flex flex-col md:grid grid-cols-9 mx-auto p-8 text-blue-50">
    <TopRightTimelineComponent icon={"bx bx-question-mark"} title={client.getTranslation("about.timeline.future.date")}
                               description={client.getTranslation("about.timeline.future.desc")}/>
    <LeftTimelineComponent icon={"bx bxs-time"} title={"2022"}
                           description={client.getTranslation("about.timeline.2022")}/>
    <RightTimelineComponent icon={"bx bxl-java"} title={client.getTranslation("about.timeline.january2022.date")}
                            description={client.getTranslation("about.timeline.january2022.desc")}/>
    <LeftTimelineComponent icon={"bx bxl-flutter"} title={"2021"}
                           description={client.getTranslation("about.timeline.2021")}/>
    <RightTimelineComponent icon={"bx bxs-virus"} title={"2020"}
                            description={client.getTranslation("about.timeline.2020")}/>
    <LeftTimelineComponent icon={"bx bxl-html5"} title={"2019"}
                           description={client.getTranslation("about.timeline.2019")}/>
    <RightTimelineComponent icon={"bx bxl-python"} title={"2018"}
                            description={client.getTranslation("about.timeline.2018")}/>
    <LeftTimelineComponent icon={"bx bxs-slideshow"} title={"2017"}
                           description={client.getTranslation("about.timeline.2017")}/>
    <RightTimelineComponent icon={"bx bxs-invader"} title={"2006 - 2016"}
                            description={client.getTranslation("about.timeline.childhood")}/>
    <BottomLeftTimelineComponent icon={"bx bxs-baby-carriage"} title={client.getTranslation("about.timeline.born.date")}
                                 description={client.getTranslation("about.timeline.born.desc")}/>
  </div>)
}
