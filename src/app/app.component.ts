import { Component } from '@angular/core';
import { HeaderService } from '@robLib/modules/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rob-library';

  readonly langs = [
    { viewValue: 'ES', value: 'es-ES' },
    { viewValue: 'EN', value: 'en-EN' },
  ];

  constructor(public headerService: HeaderService) {
    this.headerService.addLang(this.langs);
  }
}
