import { Component, inject, ViewChild } from '@angular/core';
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
import { ToastMessage } from '../../shared/components/toast-message/toast-message';

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
    Footer,
    ToastMessage
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private http = inject(HttpClient);


  @ViewChild(FormName) formNameComponent!: FormName;
  @ViewChild(FormEmail) formEmailComponent!: FormEmail;
  @ViewChild(FormMessage) formMessageComponent!: FormMessage;
  @ViewChild(FormValidationBox) formValidationBox!: FormValidationBox;

  name: string = '';
  email: string = '';
  message: string = '';
  privacyPolicyChecked: boolean = false;

  mailTest = false;
  showToast = false;

  post = {
    endPoint: 'https://paulangeles.com/portfolio/sendMail.php',
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
    this.mailTest ? this.handleTestSubmission() : this.handleRealSubmission();
  }

  private handleTestSubmission() {
    console.log('Test-Modus: Formular wurde gesendet', {
      name: this.name,
      email: this.email,
      message: this.message
    });
    this.finishSubmission();
  }

  private handleRealSubmission() {
    this.http.post(this.post.endPoint, this.post.body(this.createPayload()))
      .subscribe({
        next: () => this.finishSubmission(),
        error: (error) => {
          console.error('Fehler beim Senden:', error);
          this.finishSubmission();
        },
        complete: () => console.info('E-Mail gesendet!')
      });
  }

  private createPayload() {
    return { name: this.name, email: this.email, message: this.message };
  }

  private finishSubmission() {
    this.showToast = true;
    this.resetForm();
  }


  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.privacyPolicyChecked = false;


    if (this.formNameComponent) this.formNameComponent.reset();
    if (this.formEmailComponent) this.formEmailComponent.reset();
    if (this.formMessageComponent) this.formMessageComponent.reset();
    if (this.formValidationBox) this.formValidationBox.submitted = false;
  }


  onToastClosed() {
    this.showToast = false;
  }

  scrollToHero() {
    const isMobile = window.innerWidth <= 1024;

    if (isMobile) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const sectionsContainer = document.querySelector('.sections');
      if (sectionsContainer) {
        sectionsContainer.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }
  }
}


