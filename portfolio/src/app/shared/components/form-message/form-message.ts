import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-message',
  imports: [FormsModule, TranslateModule, CommonModule],
  templateUrl: './form-message.html',
  styleUrl: './form-message.scss',
})
export class FormMessage {
  @Input() message: string = '';
  @Output() messageChange = new EventEmitter<string>();

  touched: boolean = false;

  onBlur() {
    this.touched = true;
  }

  get isInvalid(): boolean {
    return this.touched && this.message.length < 4;
  }
}

// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { TranslateModule } from '@ngx-translate/core';

// @Component({
//   selector: 'app-form-message',
//   imports: [FormsModule, TranslateModule],
//   templateUrl: './form-message.html',
//   styleUrl: './form-message.scss',
// })
// export class FormMessage {
//   @Input() message: string = '';
//   @Output() messageChange = new EventEmitter<string>();
// }
