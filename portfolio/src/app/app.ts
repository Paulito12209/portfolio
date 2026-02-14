import { Component, signal } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './core/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');

    // Aktualisiert das lang-Attribut des html-Tags bei Sprachwechsel
    this.translate.onLangChange.subscribe((event) => {
      document.documentElement.lang = event.lang;
    });
    // Initial setzen
    document.documentElement.lang = this.translate.currentLang || 'de';
  }
}