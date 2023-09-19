import { Component } from '@angular/core';
import { HeaderService } from '@robLib/modules/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly langs = [
    { viewValue: 'ES', value: 'es-ES' },
    { viewValue: 'EN', value: 'en-EN' },
  ];

  readonly routes = [
    { uri: '', name: 'Home' },
    { uri: 'text', name: 'Text' },
    { uri: 'spinner', name: 'Spinner' },
  ];

  constructor(public headerService: HeaderService) {
    this.headerService.addLang(this.langs);
  }
}
