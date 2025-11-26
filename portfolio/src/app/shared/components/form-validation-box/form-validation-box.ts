import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form-validation-box',
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './form-validation-box.html',
  styleUrl: './form-validation-box.scss',
})
export class FormValidationBox {
  privacyPolicyChecked: boolean = false;
}
