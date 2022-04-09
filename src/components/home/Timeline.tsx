import language from "../../language";
import {
    BottomLeftTimelineComponent,
    LeftTimelineComponent,
    RightTimelineComponent,
    TopRightTimelineComponent,
} from "./components/TimelineComponent";

export default function Timeline() {
    return (<div className="flex flex-col md:grid grid-cols-9 mx-auto p-8 text-blue-50">
        <TopRightTimelineComponent icon={"bx bxs-calendar"} title={"2022"}
                                   description={language.ABOUT.TIMELINE.YEAR_2022}/>
        <LeftTimelineComponent icon={"bx bxl-flutter"} title={"2021"} description={language.ABOUT.TIMELINE.YEAR_2021}/>
        <RightTimelineComponent icon={"bx bxs-virus"} title={"2020"} description={language.ABOUT.TIMELINE.YEAR_2020}/>
        <LeftTimelineComponent icon={"bx bxl-html5"} title={"2019"} description={language.ABOUT.TIMELINE.YEAR_2019}/>
        <RightTimelineComponent icon={"bx bxl-python"} title={"2018"} description={language.ABOUT.TIMELINE.YEAR_2018}/>
        <LeftTimelineComponent icon={"bx bxs-slideshow"} title={"2017"}
                               description={language.ABOUT.TIMELINE.YEAR_2017}/>
        <RightTimelineComponent icon={"bx bxs-invader"} title={"2006 - 2016"}
                                description={language.ABOUT.TIMELINE.CHILDHOOD}/>
        <BottomLeftTimelineComponent icon={"bx bxs-baby-carriage"} title={language.ABOUT.TIMELINE.BORN.DATE}
                                     description={language.ABOUT.TIMELINE.BORN.DESC}/>
    </div>)
}