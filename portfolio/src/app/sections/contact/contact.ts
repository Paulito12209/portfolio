import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { SectionContent } from '../../shared/components/section-content/section-content';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionBow } from '../../shared/components/section-bow/section-bow';
import { FormName } from '../../shared/components/form-name/form-name';
import { FormMessage } from '../../shared/components/form-message/form-message';
import { FormEmail } from '../../shared/components/form-email/form-email';
import { FormValidationBox } from '../../shared/components/form-validation-box/form-validation-box';
import { Email } from '../../shared/components/email/email';
import { PhoneNumber } from '../../shared/components/phone-number/phone-number';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SectionContent,
    SectionBow,
    FormName,
    FormEmail,
    FormMessage,
    FormValidationBox,
    Email,
    PhoneNumber,
    Footer
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private http = inject(HttpClient);

  name: string = '';
  email: string = '';
  message: string = '';
  privacyPolicyChecked: boolean = false;

  mailTest = false;

  post = {
    endPoint: 'https://paulangeles.com/projects/portfolio/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  isFormValid(): boolean {
    return (
      this.name.length > 0 &&
      this.email.length > 0 &&
      this.isValidEmail(this.email) &&
      this.message.length > 3 &&
      this.privacyPolicyChecked
    );
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  onSubmit() {
    if (!this.isFormValid()) return;

    if (this.mailTest) {
      console.log('Test-Modus: Formular wurde gesendet', {
        name: this.name,
        email: this.email,
        message: this.message
      });
      this.resetForm();
    } else {
      this.http.post(this.post.endPoint, this.post.body({
        name: this.name,
        email: this.email,
        message: this.message
      }))
        .subscribe({
          next: () => {
            this.resetForm();
          },
          error: (error) => {
            console.error('Fehler beim Senden:', error);
          },
          complete: () => console.info('E-Mail gesendet!')
        });
    }
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.privacyPolicyChecked = false;
  }
}

// import { Component } from '@angular/core';
// import { TranslateModule } from '@ngx-translate/core';
// import { SectionContent } from '../../shared/components/section-content/section-content';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { SectionBow } from '../../shared/components/section-bow/section-bow';
// import { FormName } from '../../shared/components/form-name/form-name';
// import { FormMessage } from '../../shared/components/form-message/form-message';
// import { FormEmail } from '../../shared/components/form-email/form-email';
// import { FormValidationBox } from '../../shared/components/form-validation-box/form-validation-box';
// import { Email } from '../../shared/components/email/email';
// import { PhoneNumber } from '../../shared/components/phone-number/phone-number';
// import { Footer } from '../../shared/components/footer/footer';

// @Component({
//   selector: 'app-contact',
//   imports: [CommonModule, FormsModule, TranslateModule, SectionContent, SectionBow, FormName, FormEmail, FormMessage, FormValidationBox, Email, PhoneNumber, Footer],
//   templateUrl: './contact.html',
//   styleUrl: './contact.scss',
// })
// export class Contact {
//   name: string = '';
//   email: string = '';
//   message: string = '';
//   privacyPolicyChecked: boolean = false;

//   onSubmit() {
//     console.log('Form submitted', { name: this.name, email: this.email, message: this.message });
//   }
// }
