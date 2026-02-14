import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-message',
  imports: [FormsModule, TranslateModule, CommonModule],
  templateUrl: './form-message.html',
  styleUrl: './form-message.scss',
})
export class FormMessage {
  @ViewChild('messageModel') messageModel!: NgModel;

  @Input() message: string = '';
  @Output() messageChange = new EventEmitter<string>();

  touched: boolean = false;

  // Aktualisiert den lokalen Wert und emittiert die Änderung an den Parent
  onInputChange(value: string) {
    this.message = value;
    this.messageChange.emit(value);
  }

  // Passt die Höhe der Textarea automatisch an den Inhalt an
  adjustHeight(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  // Setzt das Eingabefeld und den ngModel-State zurück
  reset() {
    this.message = '';
    this.touched = false;
    if (this.messageModel) {
      this.messageModel.control.reset('');
      // Reset height manually if needed, or rely on binding
      const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
      if (textarea) textarea.style.height = 'auto'; // Reset height
    }
  }

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
