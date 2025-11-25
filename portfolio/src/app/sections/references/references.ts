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
      person: 'Max Muster',
      project: 'Projekt Kochwelt',
      description: '"Paul ist ein sehr aufmerksamer und talentierter Entwickler. Er kann die Aufgabenverteilung gut planen und dokumentieren."'
    },
    {
      person: 'Eva Elf',
      project: 'Projekt Kochwelt',
      description: '"Paul bemüht sich immer einen zu unterstützen, wenn man mal ein Problem hat."'
    },
    {
      person: 'Noah Nussbaum',
      project: 'Projekt Join',
      description: '"Paul ist ein sehr aufmerksamer und talentierter Entwickler. Er kann die Aufgabenverteilung gut planen und dokumentieren."'
    }
  ];
}
