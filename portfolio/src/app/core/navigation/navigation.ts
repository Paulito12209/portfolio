import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

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

  private router = inject(Router);
  private translate = inject(TranslateService);

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

  /**
   * Navigiert zur Section - scrollt horizontal im .sections Container.
   * Funktioniert sowohl auf der Startseite als auch von anderen Seiten aus.
   * @param sectionId - Die ID der Section (z.B. 'hero', 'why-me', 'skills', 'projects', 'contact')
   */
  navigateToSection(sectionId: string) {
    // Mobile-Menü schließen
    if (this.menuOpen) {
      this.menuOpen = false;
    }

    // Prüfen, ob wir auf der Startseite sind
    const isOnHomePage = this.router.url === '/' || this.router.url === '';

    if (isOnHomePage) {
      // Direkt zur Section scrollen
      this.scrollToSection(sectionId);
    } else {
      // Zur Startseite navigieren mit Fragment
      this.router.navigate(['/'], { fragment: sectionId }).then(() => {
        // Nach Navigation zur Section scrollen
        setTimeout(() => {
          this.scrollToSection(sectionId);
        }, 150);
      });
    }
  }

  /**
   * Scrollt horizontal zur Section im .sections Container.
   * Berechnet die Position so, dass die Section genau am linken Rand beginnt.
   */
  private scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    const sectionsContainer = document.querySelector('.sections');

    if (section && sectionsContainer) {
      // Finde das parent <section> Element (nicht die app-* Komponente)
      const sectionElement = section.closest('.section') || section;

      // getBoundingClientRect ist zuverlässiger als offsetLeft,
      // da offsetLeft relativ zum offsetParent (body) ist und den Sidebar-Offset (160px) einschließt.
      const containerRect = sectionsContainer.getBoundingClientRect();
      const sectionRect = (sectionElement as HTMLElement).getBoundingClientRect();
      const scrollTarget = sectionRect.left - containerRect.left + sectionsContainer.scrollLeft;

      sectionsContainer.scrollTo({
        left: scrollTarget,
        behavior: 'smooth'
      });
    }
  }
}
