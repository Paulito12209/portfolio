import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-content',
  imports: [],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const container = this.elementRef.nativeElement.querySelector('.main-container');

    container.addEventListener('wheel', (event: WheelEvent) => {
      event.preventDefault();

      // Scroll-Wert verstärken
      const scrollAmount = event.deltaY * 3; // <- 2x stärker!
      container.scrollLeft += scrollAmount;

    }, { passive: false }); // <- Das ist der wichtige Teil!
  }
}
