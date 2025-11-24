import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionContent } from '../../shared/components/section-content/section-content';
import { SectionBow } from '../../shared/components/section-bow/section-bow';
import { ProjectDetails } from '../../shared/components/project-details/project-details';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslateModule, SectionContent, SectionBow, ProjectDetails],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      number: '1',
      title: 'Project Join',
      description: 'PROJECTS.JOIN_DESCRIPTION',
      technologies: 'Angular, TypeScript, HTML, CSS, Firebase',
      learning: 'PROJECTS.JOIN_LEARNING',
      image: './img/Screen_Join.png',
      liveLink: '#',
      githubLink: '#'
    },
    {
      number: '2',
      title: 'Project Pollo Loco',
      description: 'PROJECTS.POLLO_DESCRIPTION',
      technologies: 'JavaScript, HTML, CSS',
      learning: 'PROJECTS.POLLO_LEARNING',
      image: './img/Screen_Pollo-loco.png',
      liveLink: '#',
      githubLink: '#'
    },
    {
      number: '3',
      title: 'Project DA Bubble',
      description: 'PROJECTS.BUBBLE_DESCRIPTION',
      technologies: 'JavaScript, HTML, CSS',
      learning: 'PROJECTS.BUBBLE_LEARNING',
      image: './img/Screen_DA-Bubble.png',
      liveLink: '#',
      githubLink: '#'
    }
  ];
}
