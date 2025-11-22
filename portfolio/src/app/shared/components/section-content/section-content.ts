import { Component, Input } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { Details } from '../details/details';

@Component({
  selector: 'app-section-content',
  imports: [TranslateModule, Details],
  templateUrl: './section-content.html',
  styleUrl: './section-content.scss',
})
export class SectionContent {
  @Input() title: string = '';
}
