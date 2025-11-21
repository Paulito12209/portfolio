import { Component } from '@angular/core';
import { SectionContent } from '../../shared/components/section-content/section-content';
import { SectionBow } from '../../shared/components/section-bow/section-bow';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [TranslateModule, SectionContent, SectionBow],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

}
