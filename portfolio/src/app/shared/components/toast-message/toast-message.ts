import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-toast-message',
    imports: [CommonModule, TranslateModule],
    templateUrl: './toast-message.html',
    styleUrl: './toast-message.scss',
})
export class ToastMessage implements OnChanges, OnDestroy {
    // Steuert ob die Toast-Message angezeigt wird
    @Input() show: boolean = false;

    // Event wenn die Toast-Message geschlossen wird
    @Output() closed = new EventEmitter<void>();

    // Interner State für die Animation
    animationState: 'hidden' | 'slide-in' | 'slide-out' = 'hidden';

    private autoCloseTimer: any = null;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['show']) {
            if (this.show) {
                this.showToast();
            }
        }
    }

    ngOnDestroy() {
        this.clearTimer();
    }

    // Toast einblenden und Timer starten
    private showToast() {
        this.animationState = 'slide-in';
        this.clearTimer();
        this.autoCloseTimer = setTimeout(() => {
            this.hideToast();
        }, 5000);
    }

    // Toast ausblenden mit Slide-Out-Animation
    hideToast() {
        this.clearTimer();
        this.animationState = 'slide-out';

        // Nach der Animation den Toast komplett ausblenden
        setTimeout(() => {
            this.animationState = 'hidden';
            this.closed.emit();
        }, 400);
    }

    // Manuelles Schließen per Klick
    onClose() {
        this.hideToast();
    }

    private clearTimer() {
        if (this.autoCloseTimer) {
            clearTimeout(this.autoCloseTimer);
            this.autoCloseTimer = null;
        }
    }
}
