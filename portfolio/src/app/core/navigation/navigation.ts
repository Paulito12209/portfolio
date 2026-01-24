import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  menuOpen = false;
  isFirstLoad = true; // Verhindert Animation beim initialen Laden
  currentLang = 'de';

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('currentLanguage') || 'de';
    this.translate.setDefaultLang('de');
    this.translate.use(savedLang);
    this.currentLang = savedLang;
  }

  toggleMenu() {
    this.isFirstLoad = false; // Nach erstem Klick Animation erlauben
    this.menuOpen = !this.menuOpen;
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;
    localStorage.setItem('currentLanguage', language);
  }
}

// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { TranslateModule } from '@ngx-translate/core';

// @Component({
//   selector: 'app-navigation',
//   imports: [TranslateModule, RouterLink],
//   templateUrl: './navigation.html',
//   styleUrl: './navigation.scss',
// })
// export class Navigation {

// }
