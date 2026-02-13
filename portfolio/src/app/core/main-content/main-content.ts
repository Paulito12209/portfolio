import { Component, AfterViewInit, ElementRef, OnDestroy, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hero } from '../../sections/hero/hero';
import { WhyMe } from '../../sections/why-me/why-me';
import { Skills } from '../../sections/skills/skills';
import { Projects } from '../../sections/projects/projects';
import { Contact } from '../../sections/contact/contact';
import { References } from '../../sections/references/references';
import { Header } from '../../shared/components/header/header';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-main-content',
  imports: [Hero, WhyMe, Skills, Projects, References, Contact, Header, TranslateModule, RouterLink],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent implements AfterViewInit, OnDestroy {
  private container: HTMLElement | null = null;
  private langSub?: Subscription;
  private resizeTimeout: any;

  private wheelHandler = (event: WheelEvent) => {
    if (window.innerWidth > 1024) {
      event.preventDefault();
      const scrollAmount = event.deltaY * 4;
      this.container!.scrollLeft += scrollAmount;
    }
  };

  private resizeHandler = () => {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => this.alignBows(), 150);
  };

  private scrollService = inject(ScrollService);
  private router = inject(Router);

  constructor(
    private elementRef: ElementRef,
    private translate: TranslateService
  ) { }

  ngAfterViewInit() {
    this.container = this.elementRef.nativeElement.querySelector('.sections');
    this.container?.addEventListener('wheel', this.wheelHandler, { passive: false });

    this.langSub = this.translate.onLangChange.subscribe(() => {
      setTimeout(() => this.alignBows(), 50);
    });

    setTimeout(() => this.alignBows(), 100);

    window.addEventListener('resize', this.resizeHandler);

    this.scrollService.startObserving();
  }

  ngOnDestroy() {
    this.container?.removeEventListener('wheel', this.wheelHandler);
    this.langSub?.unsubscribe();
    window.removeEventListener('resize', this.resizeHandler);
    clearTimeout(this.resizeTimeout);
    this.scrollService.stopObserving();
  }

  private alignBows() {
    if (window.innerWidth <= 1024) return;

    const el = this.elementRef.nativeElement;

    const bowPairs = [
      { bow: '.hero-bow', title: '#why-me app-section-content h2' },
      { bow: '.why-me-bow', title: '#skills app-section-content h2' },
      { bow: '.skills-bow', title: '#projects app-section-content h2' },
      { bow: '.projects-bow', title: '#references app-section-content h2' },
      { bow: '.references-bow', title: '#contact app-section-content h2' },
    ];

    const items: { bowEl: HTMLElement; titleEl: HTMLElement }[] = [];
    for (const { bow, title } of bowPairs) {
      const bowEl = el.querySelector(bow) as HTMLElement;
      const titleEl = el.querySelector(title) as HTMLElement;
      if (bowEl && titleEl) {
        bowEl.style.paddingTop = '0px';
        bowEl.style.marginTop = '0px';
        items.push({ bowEl, titleEl });
      }
    }

    requestAnimationFrame(() => {
      for (const { bowEl, titleEl } of items) {
        const bowTop = bowEl.getBoundingClientRect().top;
        const titleBottom = titleEl.getBoundingClientRect().bottom;
        const arrowImg = bowEl.querySelector('img');
        const arrowH = arrowImg ? arrowImg.getBoundingClientRect().height : 0;
        const offset = Math.max(0, (titleBottom - bowTop - arrowH / 2) - 18);
        bowEl.style.paddingTop = `${offset}px`;
      }
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
