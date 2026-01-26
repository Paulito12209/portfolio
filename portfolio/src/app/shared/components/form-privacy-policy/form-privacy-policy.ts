import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-form-privacy-policy',
    imports: [TranslateModule, RouterLink],
    templateUrl: './form-privacy-policy.html',
    styleUrl: './form-privacy-policy.scss',
})
export class FormPrivacyPolicy {
    @Input() error: boolean = false;
}
