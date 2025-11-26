import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionContent } from '../../shared/components/section-content/section-content';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionBow } from '../../shared/components/section-bow/section-bow';
import { FormName } from '../../shared/components/form-name/form-name';
import { FormMessage } from '../../shared/components/form-message/form-message';
import { FormEmail } from '../../shared/components/form-email/form-email';
import { FormValidationBox } from '../../shared/components/form-validation-box/form-validation-box';
import { Button } from '../../shared/components/button/button';
import { Email } from '../../shared/components/email/email';
import { PhoneNumber } from '../../shared/components/phone-number/phone-number';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, TranslateModule, SectionContent, SectionBow, FormName, FormEmail, FormMessage, FormValidationBox, Button, Email, PhoneNumber, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  name: string = '';
  email: string = '';
  message: string = '';
  privacyPolicyChecked: boolean = false;

  onSubmit() {
    console.log('Form submitted', { name: this.name, email: this.email, message: this.message });
  }
}
