import EventEmitter from "events";
import Statuses from "./Statuses";
import {Socket, io} from "socket.io-client";

import en from "../lang/en.json"
import fr from "../lang/fr.json"

const enTranslations = JSON.parse(JSON.stringify(en))
const frTranslations = JSON.parse(JSON.stringify(fr))

export default class Client extends EventEmitter {
  public statuses: Statuses | undefined;
  public connected: boolean = false;
  public error: boolean = false;

  public validLanguages: string[] = ["en", "fr"]

  private language: string = "en";
  private lightTheme: boolean = false;

  public wss: Socket = io();

  constructor() {
    super();

    this.wss.on("connect", () => {
      this.error = false;
      this.connected = true;
    })

    this.wss.on("error", () => {
      this.error = true;
    })

    this.wss.on("status", (data) => {
      this.statuses = data;
    })

    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
    }

    this.language = localStorage.getItem("lang") ?? "en";

    if (!this.validLanguages.includes(this.language)) {
      this.language = "en";
      localStorage.setItem("lang", "en");
    }

    if (!localStorage.getItem("light")) {
      localStorage.setItem("light", "0");
    }

    this.lightTheme = localStorage.getItem("light") === "1";

    if (!["0", "1"].includes(localStorage.getItem("light") ?? "")) {
      localStorage.setItem("light", "0");
      this.lightTheme = false;
    }

    if (this.lightTheme) {
      document.getElementsByTagName("html")[0].classList.toggle("dark")
    }
  }

  public getTranslation(translationKey: keyof typeof en | keyof typeof fr): string {
    if (this.language === "fr") {
      return frTranslations[translationKey] ?? ""
    }

    return enTranslations[translationKey] ?? ""
  }

  public getLanguage(): string {
    return this.language;
  }

  public setLanguage(language: string): void {
    this.language = language;
    localStorage.setItem("lang", language);

    if (!this.validLanguages.includes(this.language)) {
      this.language = "en";
      localStorage.setItem("lang", "en");
    }

    this.emit("languageChanged");
  }

  public setLightTheme(lightTheme: boolean) {
    this.lightTheme = lightTheme;
    localStorage.setItem("light", lightTheme ? "1" : "0");

    this.emit("themeChanged");
    
    document.getElementsByTagName("html")[0].classList.toggle("dark")
  }

  public isLightTheme(): boolean {
    return this.lightTheme;
  }
}
