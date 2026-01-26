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
    @Input() error: boolean = false;
    @Output() checkedChange = new EventEmitter<boolean>();

    hovered: boolean = false;

    get currentImage(): string {
        if (this.error && !this.checked) {
            return './img/icons/contact/checkbox_error.svg';
        }

        if (this.checked) {
            return this.hovered
                ? './img/icons/contact/checkbox_click.svg'
                : './img/icons/contact/checkbox_checked.svg';
        } else {
            return this.hovered
                ? './img/icons/contact/checkbox_hover.svg'
                : './img/icons/contact/checkbox_default.svg';
        }
    }

    toggleCheckbox() {
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
    }
}
