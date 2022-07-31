import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DiscordRedirect, GithubRedirect, TwitterRedirect, YoutubeRedirect } from "./components/redirect/Redirect";
import Error404 from "./pages/404";
import Brand from "./pages/Brand";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Status from "./pages/Status";
import Terms from "./pages/Terms";
import Client from "./struct/Client";
import { useState } from "react";

export default function App({client}: { client: Client }) {
  const [language, setLanguage] = useState(client.getLanguage());
  const [theme, setTheme] = useState(client.isLightTheme());

  client.on("languageChanged", () => {
    setLanguage(client.getLanguage());
  });

  client.on("themeChanged", () => {
    setTheme(client.isLightTheme());
  });

  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home client={client}/>}/>
      <Route path="/status" element={<Status client={client}/>}/>
      <Route path="/branding" element={<Brand client={client}/>}/>
      <Route path="/contact" element={<Contact client={client}/>}/>
      <Route path="/terms" element={<Terms client={client}/>}/>
      <Route path="/discord" element={<DiscordRedirect/>}/>
      <Route path="/youtube" element={<YoutubeRedirect/>}/>
      <Route path="/github" element={<GithubRedirect/>}/>
      <Route path="/twitter" element={<TwitterRedirect/>}/>
      <Route path="*" element={<Error404 client={client}/>}/>
    </Routes>
  </BrowserRouter>)
}
