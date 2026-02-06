import { Component, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hero } from '../../sections/hero/hero';
import { WhyMe } from '../../sections/why-me/why-me';
import { Skills } from '../../sections/skills/skills';
import { Projects } from '../../sections/projects/projects';
import { Contact } from '../../sections/contact/contact';
import { References } from '../../sections/references/references';
import { Header } from '../../shared/components/header/header';

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
    if (window.innerWidth > 768) {
      event.preventDefault();
      const scrollAmount = event.deltaY * 3;
      this.container!.scrollLeft += scrollAmount;
    }
  };

  private resizeHandler = () => {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => this.alignBows(), 150);
  };

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
  }

  ngOnDestroy() {
    this.container?.removeEventListener('wheel', this.wheelHandler);
    this.langSub?.unsubscribe();
    window.removeEventListener('resize', this.resizeHandler);
    clearTimeout(this.resizeTimeout);
  }

  private alignBows() {
    if (window.innerWidth <= 480) return;

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
        // h2 hat writing-mode: vertical-rl + rotate(180deg),
        // daher ist der erste Buchstabe am UNTEREN Ende (.bottom)
        const titleBottom = titleEl.getBoundingClientRect().bottom;
        // Unteres Ende des Pfeils auf den ersten Buchstaben ausrichten
        const arrowImg = bowEl.querySelector('img');
        const arrowH = arrowImg ? arrowImg.getBoundingClientRect().height : 0;
        const offset = Math.max(0, (titleBottom - bowTop - arrowH / 2) - 18);
        bowEl.style.paddingTop = `${offset}px`;
      }
    });
  }
}

// import { Component, AfterViewInit, ElementRef } from '@angular/core';
// import { Hero } from '../../sections/hero/hero';
// import { WhyMe } from '../../sections/why-me/why-me';
// import { Skills } from '../../sections/skills/skills';
// import { Projects } from '../../sections/projects/projects';
// import { Contact } from '../../sections/contact/contact';
// import { References } from '../../sections/references/references';

// @Component({
//   selector: 'app-main-content',
//   imports: [Hero, WhyMe, Skills, Projects, References, Contact],
//   templateUrl: './main-content.html',
//   styleUrl: './main-content.scss',
// })
// export class MainContent implements AfterViewInit {
//   constructor(private elementRef: ElementRef) { }

//   ngAfterViewInit() {
//     const container = this.elementRef.nativeElement.querySelector('.main-container');

//     container.addEventListener('wheel', (event: WheelEvent) => {
//       event.preventDefault(); // Stoppt vertikales Scrollen

//       // Scroll-Wert verstärken (statt nur deltaY)
//       const scrollAmount = event.deltaY * 3; // <- 3x stärker!
//       container.scrollLeft += scrollAmount;

//     }, { passive: false }); // <- Wichtig für preventDefault()
//   }
// }
