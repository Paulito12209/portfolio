import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, TranslateModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  menuOpen = false;
  isFirstLoad = true; // Verhindert Animation beim initialen Laden
  currentLang = 'de';

  private translate = inject(TranslateService);
  scrollService = inject(ScrollService);

  constructor() {
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

  navigateToSection(sectionId: string) {
    if (this.menuOpen) {
      this.menuOpen = false;
    }
    this.scrollService.navigateToSection(sectionId);
  }
}
