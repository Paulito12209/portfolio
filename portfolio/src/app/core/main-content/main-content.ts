import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { WhyMe } from '../../sections/why-me/why-me';
import { Skills } from '../../sections/skills/skills';
import { Projects } from '../../sections/projects/projects';
import { Contact } from '../../sections/contact/contact';
import { References } from '../../sections/references/references';

@Component({
  selector: 'app-main-content',
  imports: [Hero, WhyMe, Skills, Projects, References, Contact],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const container = this.elementRef.nativeElement.querySelector('.main-container');

    container.addEventListener('wheel', (event: WheelEvent) => {
      event.preventDefault(); // Stoppt vertikales Scrollen

      // Scroll-Wert verstärken (statt nur deltaY)
      const scrollAmount = event.deltaY * 3; // <- 3x stärker!
      container.scrollLeft += scrollAmount;

    }, { passive: false }); // <- Wichtig für preventDefault()
  }
}
