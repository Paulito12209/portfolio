import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-details',
  imports: [TranslateModule],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  @Input() detail: string = '';
}
