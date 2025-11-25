import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form-email',
  imports: [FormsModule, TranslateModule],
  templateUrl: './form-email.html',
  styleUrl: './form-email.scss',
})
export class FormEmail {
  @Input() email: string = '';
  @Output() emailChange = new EventEmitter<string>();
}
