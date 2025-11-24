import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-project-details',
  imports: [TranslateModule, Button],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  @Input() number: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() technologies: string = '';
  @Input() learning: string = '';
  @Input() image: string = '';
  @Input() githubLink: string = '';
  @Input() liveLink: string = '';
}
