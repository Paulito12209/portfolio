import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Header } from '../header/header';
import { SectionBow } from '../section-bow/section-bow';
import { SectionContent } from '../section-content/section-content';
import { Footer } from '../footer/footer';
import { Email } from '../email/email';
import { PhoneNumber } from '../phone-number/phone-number';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imprint',
  imports: [CommonModule, TranslateModule, Header, SectionContent, Footer, Email, PhoneNumber, RouterLink],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint implements AfterViewInit, OnDestroy {
  @ViewChild('sectionsContainer') sectionsContainer!: ElementRef<HTMLElement>;

  private container: HTMLElement | null = null;
  private wheelHandler = (e: WheelEvent) => {
    if (this.container && window.innerWidth > 768) {
      e.preventDefault();
      this.container.scrollLeft += e.deltaY * 4;
    }
  };

  ngAfterViewInit() {
    this.container = this.sectionsContainer?.nativeElement;
    this.container?.addEventListener('wheel', this.wheelHandler, { passive: false });
  }

  ngOnDestroy() {
    this.container?.removeEventListener('wheel', this.wheelHandler);
  }

  scrollToNext() {
    const container = this.sectionsContainer?.nativeElement;
    if (!container) return;
    const sections = container.querySelectorAll('.section');
    if (sections[1]) {
      const section = sections[1] as HTMLElement;
      container.scrollTo({ left: section.offsetLeft, behavior: 'smooth' });
    }
  }

  scrollToStart() {
    const container = this.sectionsContainer?.nativeElement;
    if (!container) return;
    container.scrollTo({ left: 0, behavior: 'smooth' });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
