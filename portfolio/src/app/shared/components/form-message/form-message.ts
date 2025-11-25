import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form-message',
  imports: [FormsModule, TranslateModule],
  templateUrl: './form-message.html',
  styleUrl: './form-message.scss',
})
export class FormMessage {
  @Input() message: string = '';
  @Output() messageChange = new EventEmitter<string>();
}
