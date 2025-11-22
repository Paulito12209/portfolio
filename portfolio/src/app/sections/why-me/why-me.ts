import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { SectionContent } from '../../shared/components/section-content/section-content';
import { SectionBow } from '../../shared/components/section-bow/section-bow';
import { Button } from '../../shared/components/button/button';
import { Details } from '../../shared/components/details/details';

@Component({
  selector: 'app-why-me',
  imports: [TranslateModule, SectionBow, SectionContent, Button, Details],
  templateUrl: './why-me.html',
  styleUrl: './why-me.scss',
})
export class WhyMe {

}
