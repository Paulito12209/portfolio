import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Button } from '../button/button';
import { ButtonSecondary } from '../button-secondary/button-secondary';

@Component({
  selector: 'app-project-details',
  imports: [TranslateModule, Button, ButtonSecondary],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails implements OnInit {
  @Input() number: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() technologies: string = '';
  @Input() learning: string = '';
  @Input() image: string = '';
  @Input() githubLink: string = '';
  @Input() liveLink: string = '';

  // Steuert den Startzustand (true = alles sichtbar)
  @Input() initiallyExpanded: boolean = true;

  // Aktueller Zustand
  isExpanded: boolean = true;

  // Mobile Breakpoint (muss mit SCSS Variable übereinstimmen)
  private mobileBreakpoint: number = 480;

  // Prüft ob Mobile View aktiv ist
  isMobile: boolean = false;

  // HostBinding für collapsed Klasse auf :host
  @HostBinding('class.collapsed')
  get isCollapsed(): boolean {
    return this.isMobile && !this.isExpanded;
  }

  ngOnInit(): void {
    this.checkMobile();
    this.isExpanded = this.initiallyExpanded;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkMobile();
  }

  private checkMobile(): void {
    this.isMobile = window.innerWidth <= this.mobileBreakpoint;
  }

  // Content wird angezeigt, wenn: Desktop ODER (Mobile UND expanded)
  get shouldShowContent(): boolean {
    return !this.isMobile || this.isExpanded;
  }

  // Toggle Buttons werden angezeigt, wenn: Mobile
  get shouldShowToggle(): boolean {
    return this.isMobile;
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }
}
