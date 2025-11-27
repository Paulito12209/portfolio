// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-form-privacy-policy',
//   imports: [],
//   templateUrl: './form-privacy-policy.html',
//   styleUrl: './form-privacy-policy.scss',
// })
// export class FormPrivacyPolicy {

// }

import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-privacy-policy',
  imports: [TranslateModule, RouterLink],
  templateUrl: './form-privacy-policy.html',
  styleUrl: './form-privacy-policy.scss',
})
export class FormPrivacyPolicy {

}
