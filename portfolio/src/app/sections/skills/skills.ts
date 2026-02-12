import { Component, inject } from '@angular/core';
import { SectionContent } from '../../shared/components/section-content/section-content';
import { SectionBow } from '../../shared/components/section-bow/section-bow';
import { TranslateModule } from '@ngx-translate/core';
import { Button } from '../../shared/components/button/button';
import { SkillIcon } from '../../shared/components/skill-icon/skill-icon';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-skills',
  imports: [TranslateModule, SectionContent, SectionBow, Button, SkillIcon],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private scrollService = inject(ScrollService);

  scrollToProjects() {
    this.scrollService.navigateToSection('projects');
  }
}
