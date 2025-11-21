import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionContent } from '../../shared/components/section-content/section-content';
// import { SectionBow } from '../../shared/components/section-bow/section-bow';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule, SectionContent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

}
