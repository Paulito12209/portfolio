import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionContent } from '../../shared/components/section-content/section-content';
import { SectionBow } from '../../shared/components/section-bow/section-bow';
import { ProjectDetails } from '../../shared/components/project-details/project-details';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslateModule, SectionContent, SectionBow, ProjectDetails],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private scrollService = inject(ScrollService);

  scrollToReferences() {
    this.scrollService.navigateToSection('references');
  }
  projects = [
    {
      number: '1',
      title: 'Project Join',
      description: 'PROJECTS.JOIN_DESCRIPTION',
      technologies: 'Angular, TypeScript, HTML, CSS, Firebase',
      learning: 'PROJECTS.JOIN_LEARNING',
      image: './img/Screen_Join.svg',
      liveLink: 'https://paulangeles.com/projects/join/',
      githubLink: 'https://github.com/Paulito12209/Join'
    },
    {
      number: '2',
      title: 'Project Pollo Loco',
      description: 'PROJECTS.POLLO_DESCRIPTION',
      technologies: 'JavaScript, HTML, CSS',
      learning: 'PROJECTS.POLLO_LEARNING',
      image: './img/Screen_Pollo-loco.png',
      liveLink: 'https://paulangeles.com/projects/pollo-loco/',
      githubLink: 'https://github.com/Paulito12209/El-Pollo-Loco'
    },
    {
      number: '3',
      title: 'Project Pokedex',
      description: 'PROJECTS.POKEDEX_DESCRIPTION',
      technologies: 'JavaScript, HTML, CSS, API',
      learning: 'PROJECTS.POKEDEX_LEARNING',
      image: './img/Screen_Pokedex.png',
      liveLink: 'https://paulangeles.com/projects/pokedex/',
      githubLink: 'https://github.com/Paulito12209/Pokedex'
    }
  ];
}
