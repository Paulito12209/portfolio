import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormCheckbox } from '../form-checkbox/form-checkbox';
import { FormPrivacyPolicy } from '../form-privacy-policy/form-privacy-policy';
import { Button } from '../button/button';

@Component({
  selector: 'app-form-validation-box',
  imports: [FormsModule, TranslateModule, CommonModule, FormCheckbox, FormPrivacyPolicy, Button],
  templateUrl: './form-validation-box.html',
  styleUrl: './form-validation-box.scss',
})
export class FormValidationBox {
  privacyPolicyChecked: boolean = false;
}
