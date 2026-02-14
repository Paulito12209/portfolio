import { Injectable, inject, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollService {
    private router = inject(Router);
    private observer: IntersectionObserver | null = null;
    private ratioMap = new Map<string, number>();

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
        const sections = document.querySelectorAll('.section[id]');
        if (!sections.length) return;

        this.observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    this.ratioMap.set(entry.target.id, entry.intersectionRatio);
                }

                let maxRatio = 0;
                let maxSection = '';
                for (const [id, ratio] of this.ratioMap) {
                    if (ratio > maxRatio) {
                        maxRatio = ratio;
                        maxSection = id;
                    }
                }

                if (maxSection) {
                    this.activeSection.set(maxSection);
                }
            },
            { root: null, threshold: [0, 0.25, 0.5, 0.75, 1.0] }
        );

        sections.forEach((section) => this.observer!.observe(section));
    }

    stopObserving() {
        this.observer?.disconnect();
        this.observer = null;
        this.ratioMap.clear();
    }
}
