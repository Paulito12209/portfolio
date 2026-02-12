import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ScrollService {
    private router = inject(Router);
    private scrollListener?: () => void;

    /** Aktuell sichtbare Section (Signal für reaktive Nutzung im Template) */
    activeSection = signal<string>('hero');

    /**
     * Navigiert zur Section - scrollt horizontal im .sections Container.
     * Funktioniert sowohl auf der Startseite als auch von anderen Seiten aus.
     */
    navigateToSection(sectionId: string) {
        const isOnHomePage = this.router.url === '/' || this.router.url === '' || this.router.url.startsWith('/#');

        if (isOnHomePage) {
            this.scrollToSection(sectionId);
        } else {
            this.router.navigate(['/'], { fragment: sectionId }).then(() => {
                setTimeout(() => this.scrollToSection(sectionId), 150);
            });
        }
    }

    /**
     * Scrollt horizontal zur Section im .sections Container.
     */
    scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        const sectionsContainer = document.querySelector('.sections');

        if (section && sectionsContainer) {
            const sectionElement = section.closest('.section') || section;
            const containerRect = sectionsContainer.getBoundingClientRect();
            const sectionRect = (sectionElement as HTMLElement).getBoundingClientRect();
            const scrollTarget = sectionRect.left - containerRect.left + sectionsContainer.scrollLeft;

            sectionsContainer.scrollTo({ left: scrollTarget, behavior: 'smooth' });
        }
    }

    /**
     * Startet die Beobachtung, welche Section gerade sichtbar ist.
     * Wird von MainContent in ngAfterViewInit aufgerufen.
     */
    startObserving() {
        const container = document.querySelector('.sections');
        if (!container) return;

        const updateActive = () => {
            if (window.innerWidth <= 768) return;

            const sections = container.querySelectorAll('.section[id]');
            const containerRect = container.getBoundingClientRect();
            let nearest = 'hero';
            let minDist = Infinity;

            sections.forEach((section: Element) => {
                const rect = section.getBoundingClientRect();
                const dist = Math.abs(rect.left - containerRect.left);
                if (dist < minDist) {
                    minDist = dist;
                    nearest = section.id;
                }
            });

            this.activeSection.set(nearest);
        };

        container.addEventListener('scroll', updateActive);
        this.scrollListener = () => container.removeEventListener('scroll', updateActive);

        updateActive();
    }

    stopObserving() {
        this.scrollListener?.();
    }
}
