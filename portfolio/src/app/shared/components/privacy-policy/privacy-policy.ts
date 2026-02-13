import { Component, ElementRef, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Header } from '../header/header';
import { SectionBow } from '../section-bow/section-bow';
import { SectionContent } from '../section-content/section-content';
import { Footer } from '../footer/footer';
import { Email } from '../email/email';
import { PhoneNumber } from '../phone-number/phone-number';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  imports: [CommonModule, TranslateModule, Header, SectionBow, SectionContent, Footer, Email, PhoneNumber, RouterLink],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy implements AfterViewInit, OnDestroy {
  private container: HTMLElement | null = null;
  private wheelHandler = (event: WheelEvent) => {
    if (window.innerWidth > 1024) {
      event.preventDefault();
      const scrollAmount = event.deltaY * 4;
      this.container!.scrollLeft += scrollAmount;
    }
  };

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.container = this.elementRef.nativeElement.querySelector('.sections');
    this.container?.addEventListener('wheel', this.wheelHandler, { passive: false });
  }

  ngOnDestroy() {
    this.container?.removeEventListener('wheel', this.wheelHandler);
  }

  scrollToNext() {
    if (!this.container) return;
    const sections = this.container.querySelectorAll('.section');
    if (sections[1]) {
      const section = sections[1] as HTMLElement;
      this.container.scrollTo({ left: section.offsetLeft, behavior: 'smooth' });
    }
  }

  scrollToStart() {
    if (!this.container) return;
    this.container.scrollTo({ left: 0, behavior: 'smooth' });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Navigiert zur Startseite und scrollt zum Hero-Bereich (ganz oben)
   */
  private router = inject(Router);
  goHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /**
   * Navigiert zu einer beliebigen Route und scrollt zum Anfang der Seite
   */
  navigateTo(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
