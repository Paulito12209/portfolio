import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  menuOpen = false;

  constructor(private translate: TranslateService) { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}

// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { TranslateModule } from '@ngx-translate/core';

// @Component({
//   selector: 'app-navigation',
//   imports: [TranslateModule, RouterLink],
//   templateUrl: './navigation.html',
//   styleUrl: './navigation.scss',
// })
// export class Navigation {

// }
