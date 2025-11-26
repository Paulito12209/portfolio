import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Header } from '../header/header';
import { SectionBow } from '../section-bow/section-bow';
import { SectionContent } from '../section-content/section-content';
import { Footer } from '../footer/footer';
import { Email } from '../email/email';
import { PhoneNumber } from '../phone-number/phone-number';

@Component({
  selector: 'app-privacy-policy',
  imports: [TranslateModule, Header, SectionBow, SectionContent, Footer, Email, PhoneNumber],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {

}
