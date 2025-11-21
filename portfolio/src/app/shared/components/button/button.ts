import { Component, Input } from '@angular/core';

import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-button',
  imports: [TranslateModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() title: string = '';
}
