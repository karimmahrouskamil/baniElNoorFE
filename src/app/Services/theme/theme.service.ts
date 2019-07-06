import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Storage } from "@ionic/storage";
const THEME_KEY = "SELECTED_THEME";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  selected = "";
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private storage: Storage
  ) {}
  // keys
  // 1) white-theme
  // 2)  dark-theme
  setTheme(theme: string) {
    document.body.className = theme;
    this.selected = theme;
    this.storage.set(THEME_KEY, theme);
  }
  setInitialTheme() {
    let InitialTheme = "white-theme";
    this.setTheme(InitialTheme);
  }
  getSavedTheme() {
    this.storage.get(THEME_KEY).then(val => {
      if (val) {
        // if already saved theme 
        this.setTheme(val);
        this.selected = val;
  
      } else {
         // if no already saved theme 
        this.setInitialTheme();
       
      }
    });
  }
}
