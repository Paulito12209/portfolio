import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { SectionBow } from '../../shared/components/section-bow/section-bow';

@Component({
  selector: 'app-hero',
  imports: [TranslateModule, SectionBow],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

}
