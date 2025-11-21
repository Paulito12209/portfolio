import { Component, Input } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-section-content',
  imports: [TranslateModule],
  templateUrl: './section-content.html',
  styleUrl: './section-content.scss',
})
export class SectionContent {
  @Input() title: string = '';
}
