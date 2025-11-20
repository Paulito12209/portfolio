import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { Header } from '../../shared/components/header/header';
import { SectionBow } from '../../shared/components/section-bow/section-bow';

@Component({
  selector: 'app-hero',
  imports: [TranslateModule, Header, SectionBow],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

}
