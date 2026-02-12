import { Component, inject } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { SectionBow } from '../../shared/components/section-bow/section-bow';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-hero',
  imports: [TranslateModule, SectionBow],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private scrollService = inject(ScrollService);

  scrollToWhyMe() {
    this.scrollService.navigateToSection('why-me');
  }
}
