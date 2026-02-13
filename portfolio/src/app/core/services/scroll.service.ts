import { Injectable, inject, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollService {
    private router = inject(Router);
    private scrollListener?: () => void;

    activeSection = signal<string>('hero');

    constructor() {
        this.router.events.pipe(
            filter((event): event is NavigationEnd => event instanceof NavigationEnd)
        ).subscribe((event) => {
            const isHomePage = event.urlAfterRedirects === '/' || event.urlAfterRedirects.startsWith('/#');
            if (!isHomePage) {
                this.activeSection.set('');
            }
        });
    }


    navigateToSection(sectionId: string) {
        const isOnHomePage = this.router.url === '/' || this.router.url === '' || this.router.url.startsWith('/#');


        this.activeSection.set(sectionId);

        if (isOnHomePage) {
            this.scrollToSection(sectionId);
        } else {
            this.router.navigate(['/'], { fragment: sectionId }).then(() => {
                setTimeout(() => this.scrollToSection(sectionId), 150);
            });
        }
    }


    scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        const sectionsContainer = document.querySelector('.sections');

        if (!section) return;

        if (window.innerWidth <= 1024) {
            const navOffset = 80;
            const sectionTop = section.getBoundingClientRect().top + window.scrollY - navOffset;
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
            return;
        }


        if (sectionsContainer) {
            const sectionElement = section.closest('.section') || section;
            const containerRect = sectionsContainer.getBoundingClientRect();
            const sectionRect = (sectionElement as HTMLElement).getBoundingClientRect();
            const scrollTarget = sectionRect.left - containerRect.left + sectionsContainer.scrollLeft;

            sectionsContainer.scrollTo({ left: scrollTarget, behavior: 'smooth' });
        }
    }

    startObserving() {
        const container = document.querySelector('.sections');
        if (!container) return;

        const updateActive = () => {
            if (window.innerWidth <= 1024) return;

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
