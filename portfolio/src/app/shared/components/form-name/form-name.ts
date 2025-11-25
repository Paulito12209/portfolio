import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form-name',
  imports: [FormsModule, TranslateModule],
  templateUrl: './form-name.html',
  styleUrl: './form-name.scss',
})
export class FormName {
  @Input() name: string = '';
  @Output() nameChange = new EventEmitter<string>();
}
