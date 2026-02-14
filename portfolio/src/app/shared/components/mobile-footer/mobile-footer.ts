import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-mobile-footer',
    standalone: true,
    imports: [CommonModule, RouterLink, TranslateModule],
    templateUrl: './mobile-footer.html',
    styleUrl: './mobile-footer.scss'
})
export class MobileFooter {
    private router = inject(Router);

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    goHome() {
        this.router.navigate(['/']).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
