import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { SectionContent } from '../../shared/components/section-content/section-content';
import { SectionBow } from '../../shared/components/section-bow/section-bow';

@Component({
  selector: 'app-why-me',
  imports: [TranslateModule, SectionBow, SectionContent],
  templateUrl: './why-me.html',
  styleUrl: './why-me.scss',
})
export class WhyMe {

}
