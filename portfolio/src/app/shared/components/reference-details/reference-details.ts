import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reference-details',
  imports: [TranslateModule],
  templateUrl: './reference-details.html',
  styleUrl: './reference-details.scss',
})
export class ReferenceDetails {
  @Input() person: string = '';
  @Input() project: string = '';
  @Input() description: string = '';
}
