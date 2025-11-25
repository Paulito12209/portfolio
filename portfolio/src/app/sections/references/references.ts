import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionContent } from '../../shared/components/section-content/section-content';
import { SectionBow } from '../../shared/components/section-bow/section-bow';
import { ReferenceDetails } from '../../shared/components/reference-details/reference-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  imports: [CommonModule, TranslateModule, SectionContent, SectionBow, ReferenceDetails],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  references = [
    {
      person: 'REFERENCES.REF_1_PERSON',
      project: 'REFERENCES.REF_1_PROJECT',
      description: 'REFERENCES.REF_1_DESCRIPTION'
    },
    {
      person: 'REFERENCES.REF_2_PERSON',
      project: 'REFERENCES.REF_2_PROJECT',
      description: 'REFERENCES.REF_2_DESCRIPTION'
    },
    {
      person: 'REFERENCES.REF_3_PERSON',
      project: 'REFERENCES.REF_3_PROJECT',
      description: 'REFERENCES.REF_3_DESCRIPTION'
    }
  ];
}
