import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionContent } from '../../shared/components/section-content/section-content';
import { SectionBow } from '../../shared/components/section-bow/section-bow';
import { ReferenceDetails } from '../../shared/components/reference-details/reference-details';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-references',
  imports: [CommonModule, TranslateModule, SectionContent, SectionBow, ReferenceDetails],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References implements AfterViewInit, OnDestroy {
  private scrollService = inject(ScrollService);
  private cdr = inject(ChangeDetectorRef);

  scrollToContact() {
    this.scrollService.navigateToSection('contact');
  }
  @ViewChild('referencesList') referencesList!: ElementRef<HTMLElement>;

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

  activeIndex = 0;
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    this.setupObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupObserver(): void {
    const container = this.referencesList?.nativeElement;
    if (!container) return;

    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersect(entries, container),
      { root: container, threshold: 0.6 }
    );

    const cards = container.querySelectorAll('app-reference-details');
    cards.forEach((card) => this.observer!.observe(card));
  }

  private handleIntersect(entries: IntersectionObserverEntry[], container: HTMLElement) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const cards = container.querySelectorAll('app-reference-details');
        const index = Array.from(cards).indexOf(entry.target as HTMLElement);
        if (index !== -1) {
          this.activeIndex = index;
          this.cdr.detectChanges();
        }
      }
    }
  }

  scrollToCard(index: number): void {
    this.activeIndex = index;
    const container = this.referencesList?.nativeElement;
    if (!container) return;

    const cards = container.querySelectorAll('app-reference-details');
    if (cards[index]) {
      const position = this.getScrollPosition(index, container, cards[index] as HTMLElement);
      container.scrollTo({ left: position, behavior: 'smooth' });
    }
  }

  private getScrollPosition(index: number, container: HTMLElement, card: HTMLElement): number {
    if (index === 0) return 0;
    if (index === this.references.length - 1) return container.scrollWidth;

    const containerCenter = container.clientWidth / 2;
    const cardCenter = card.offsetLeft + card.clientWidth / 2;
    return cardCenter - containerCenter;
  }
}
