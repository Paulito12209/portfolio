// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { TranslateModule } from '@ngx-translate/core';

// @Component({
//   selector: 'app-form-validation-box',
//   imports: [TranslateModule, CommonModule, FormsModule],
//   templateUrl: './form-validation-box.html',
//   styleUrl: './form-validation-box.scss',
// })
// export class FormValidationBox {
//   privacyPolicyChecked: boolean = false;
// }

import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormCheckbox } from '../form-checkbox/form-checkbox';
import { FormPrivacyPolicy } from '../form-privacy-policy/form-privacy-policy';

@Component({
  selector: 'app-form-validation-box',
  imports: [CommonModule, TranslateModule, FormCheckbox, FormPrivacyPolicy],
  templateUrl: './form-validation-box.html',
  styleUrl: './form-validation-box.scss',
})
export class FormValidationBox {
  @Input() privacyPolicyChecked: boolean = false;
  @Output() privacyPolicyCheckedChange = new EventEmitter<boolean>();

  @Input() formValid: boolean = false;
  @Output() submitForm = new EventEmitter<void>();

  onCheckboxChange(checked: boolean) {
    this.privacyPolicyCheckedChange.emit(checked);
  }

  onSubmitClick() {
    this.submitForm.emit();
  }
}
