import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
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
export class References implements AfterViewInit, OnDestroy {
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
  private scrollListener: (() => void) | null = null;

  ngAfterViewInit(): void {
    // Scroll-Event-Listener hinzufügen für automatische Aktualisierung des aktiven Index
    if (this.referencesList?.nativeElement) {
      this.scrollListener = this.onScroll.bind(this);
      this.referencesList.nativeElement.addEventListener('scroll', this.scrollListener);
    }
  }

  ngOnDestroy(): void {
    // Event-Listener entfernen
    if (this.referencesList?.nativeElement && this.scrollListener) {
      this.referencesList.nativeElement.removeEventListener('scroll', this.scrollListener);
    }
  }

  // Zur entsprechenden Card scrollen
  scrollToCard(index: number): void {
    this.activeIndex = index;
    const container = this.referencesList?.nativeElement;
    if (!container) return;

    const cards = container.querySelectorAll('app-reference-details');
    if (cards[index]) {
      const card = cards[index] as HTMLElement;

      // Berechne Scroll-Position basierend auf Index
      if (index === 0) {
        // Erste Card: Links beginnen
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (index === this.references.length - 1) {
        // Letzte Card: Rechts enden
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
      } else {
        // Mittlere Card: Zentrieren
        const containerCenter = container.clientWidth / 2;
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        container.scrollTo({ left: cardCenter - containerCenter, behavior: 'smooth' });
      }
    }
  }

  // Aktiven Index basierend auf Scroll-Position aktualisieren
  private onScroll(): void {
    const container = this.referencesList?.nativeElement;
    if (!container) return;

    const cards = container.querySelectorAll('app-reference-details');
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      const cardCenter = cardElement.offsetLeft + cardElement.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    this.activeIndex = closestIndex;
  }
}
