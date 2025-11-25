import { Component } from '@angular/core';
import { Imprint } from '../imprint/imprint';
import { PrivacyPolicy } from '../privacy-policy/privacy-policy';
import { FooterCopyright } from '../footer-copyright/footer-copyright';
import { FooterImprint } from '../footer-imprint/footer-imprint';
import { FooterPrivacyPolicy } from '../footer-privacy-policy/footer-privacy-policy';

@Component({
  selector: 'app-footer',
  imports: [FooterImprint, FooterPrivacyPolicy, FooterCopyright],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

}
