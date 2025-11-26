import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-privacy-policy',
  imports: [TranslateModule, RouterLink],
  templateUrl: './footer-privacy-policy.html',
  styleUrl: './footer-privacy-policy.scss',
})
export class FooterPrivacyPolicy {

}
