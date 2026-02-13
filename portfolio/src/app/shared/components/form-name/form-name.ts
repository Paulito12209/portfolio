import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form-name',
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './form-name.html',
  styleUrl: './form-name.scss',
})
export class FormName {
  @ViewChild('nameModel') nameModel!: NgModel;

  @Input() name: string = '';
  @Output() nameChange = new EventEmitter<string>();

  touched: boolean = false;

  get isInvalid(): boolean {
    return this.touched && (!this.name || this.name.trim().length === 0);
  }

  // Aktualisiert den lokalen Wert und emittiert die Änderung an den Parent
  onInputChange(value: string) {
    this.name = value;
    this.nameChange.emit(value);
  }

  // Setzt das Eingabefeld und den ngModel-State zurück
  reset() {
    this.name = '';
    this.touched = false;
    if (this.nameModel) {
      this.nameModel.control.reset('');
    }
  }

  onBlur(): void {
    this.touched = true;
  }
}

// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { TranslateModule } from '@ngx-translate/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-form-name',
//   imports: [FormsModule, TranslateModule, CommonModule],
//   templateUrl: './form-name.html',
//   styleUrl: './form-name.scss',
// })
// export class FormName {
//   @Input() name: string = '';
//   @Output() nameChange = new EventEmitter<string>();

//   touched: boolean = false;

//   onBlur() {
//     this.touched = true;
//   }

//   get isInvalid(): boolean {
//     return this.touched && this.name.length === 0;
//   }
// }

