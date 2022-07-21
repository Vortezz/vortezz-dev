import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import {DiscordRedirect, GithubRedirect, TwitterRedirect, YoutubeRedirect} from "./components/redirect/Redirect";
import Error404 from "./pages/404";
import Brand from "./pages/Brand";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Status from "./pages/Status";
import Terms from "./pages/Terms";
import Client from "./struct/Client";

export default function App({client}: { client: Client }) {
  if (!client) {
    client = new Client();
  }

  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/status" element={<Status client={client}/>}/>
      <Route path="/branding" element={<Brand/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/discord" element={<DiscordRedirect/>}/>
      <Route path="/youtube" element={<YoutubeRedirect/>}/>
      <Route path="/github" element={<GithubRedirect/>}/>
      <Route path="/twitter" element={<TwitterRedirect/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
  </BrowserRouter>)
}
