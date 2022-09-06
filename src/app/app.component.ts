import { Component } from '@angular/core';
import { HeaderService } from '@robLib/modules/layout';
import { SpinnerService } from '@robLib/modules/spinner';

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

  constructor(private spinner: SpinnerService, public headerService: HeaderService) {
    this.headerService.addLang(this.langs);
    // this.spinner.show();
  }
}
