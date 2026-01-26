import { Component, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { WhyMe } from '../../sections/why-me/why-me';
import { Skills } from '../../sections/skills/skills';
import { Projects } from '../../sections/projects/projects';
import { Contact } from '../../sections/contact/contact';
import { References } from '../../sections/references/references';
import { Header } from '../../shared/components/header/header';

@Component({
  selector: 'app-main-content',
  imports: [Hero, WhyMe, Skills, Projects, References, Contact, Header],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent implements AfterViewInit, OnDestroy {
  private container: HTMLElement | null = null;
  private wheelHandler = (event: WheelEvent) => {
    if (window.innerWidth > 768) {
      event.preventDefault();
      const scrollAmount = event.deltaY * 3;
      this.container!.scrollLeft += scrollAmount;
    }
  };

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.container = this.elementRef.nativeElement.querySelector('.main-container');
    this.container?.addEventListener('wheel', this.wheelHandler, { passive: false });
  }

  ngOnDestroy() {
    this.container?.removeEventListener('wheel', this.wheelHandler);
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
