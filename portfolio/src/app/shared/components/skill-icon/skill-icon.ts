import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-icon',
  imports: [TranslateModule],
  templateUrl: './skill-icon.html',
  styleUrl: './skill-icon.scss',
})
export class SkillIcon {
  @Input() icon: string = '';
  @Input() name: string = '';
}
