import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
@Injectable({
  providedIn: "root"
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  //white-theme or
  //  dark-theme
  setTheme(theme: string) {
    document.body.className = theme;
  }
}
