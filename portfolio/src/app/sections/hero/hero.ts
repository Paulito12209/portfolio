import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-hero',
  imports: [TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  constructor(private translate: TranslateService) { }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
