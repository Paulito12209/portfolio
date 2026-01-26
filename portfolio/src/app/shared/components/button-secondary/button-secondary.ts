import { Component, Input } from '@angular/core';

import { TranslateModule } from "@ngx-translate/core";

@Component({
    selector: 'app-button-secondary',
    imports: [TranslateModule],
    templateUrl: './button-secondary.html',
    styleUrl: './button-secondary.scss',
})
export class ButtonSecondary {
    @Input() title: string = '';
}
