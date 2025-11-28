import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-checkbox.html',
  styleUrl: './form-checkbox.scss',
})
export class FormCheckbox {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onCheckboxChange(value: boolean) {
    this.checkedChange.emit(value);
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-form-checkbox',
//   imports: [],
//   templateUrl: './form-checkbox.html',
//   styleUrl: './form-checkbox.scss',
// })
// export class FormCheckbox {

// }