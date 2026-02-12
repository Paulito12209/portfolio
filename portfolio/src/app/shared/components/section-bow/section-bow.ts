import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-section-bow',
  imports: [],
  templateUrl: './section-bow.html',
  styleUrl: './section-bow.scss',
})
export class SectionBow {
  @Output() arrowClick = new EventEmitter<void>();
}
