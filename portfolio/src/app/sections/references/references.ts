import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionContent } from '../../shared/components/section-content/section-content';
import { SectionBow } from '../../shared/components/section-bow/section-bow';

@Component({
  selector: 'app-references',
  imports: [TranslateModule, SectionContent, SectionBow],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {

}
