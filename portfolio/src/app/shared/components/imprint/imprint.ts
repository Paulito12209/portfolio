import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Header } from '../header/header';
import { SectionBow } from '../section-bow/section-bow';
import { SectionContent } from '../section-content/section-content';
import { Footer } from '../footer/footer';
import { Email } from '../email/email';
import { PhoneNumber } from '../phone-number/phone-number';

@Component({
  selector: 'app-imprint',
  imports: [TranslateModule, Header, SectionBow, SectionContent, Footer, Email, PhoneNumber, RouterLink],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {
  /**
   * Scrollt zum Seitenanfang (Mobile View)
   */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
