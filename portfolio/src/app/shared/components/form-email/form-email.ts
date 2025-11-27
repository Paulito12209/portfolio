import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-email',
  imports: [FormsModule, TranslateModule, CommonModule],
  templateUrl: './form-email.html',
  styleUrl: './form-email.scss',
})
export class FormEmail {
  @Input() email: string = '';
  @Output() emailChange = new EventEmitter<string>();

  touched: boolean = false;

  onBlur() {
    this.touched = true;
  }

  get isInvalid(): boolean {
    return this.touched && (this.email.length === 0 || !this.isValidEmail());
  }

  get errorMessage(): string {
    if (this.email.length === 0) {
      return 'CONTACT.ERROR_EMAIL_REQUIRED';
    }
    if (!this.isValidEmail()) {
      return 'CONTACT.ERROR_EMAIL_INVALID';
    }
    return '';
  }

  private isValidEmail(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(this.email);
  }
}

// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { TranslateModule } from '@ngx-translate/core';

// @Component({
//   selector: 'app-form-email',
//   imports: [FormsModule, TranslateModule],
//   templateUrl: './form-email.html',
//   styleUrl: './form-email.scss',
// })
// export class FormEmail {
//   @Input() email: string = '';
//   @Output() emailChange = new EventEmitter<string>();
// }
