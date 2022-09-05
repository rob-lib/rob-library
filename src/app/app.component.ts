import { Component } from '@angular/core';
import { SpinnerService } from '@robLib/modules/spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rob-library';

  constructor(private spinner: SpinnerService) {
    // this.spinner.show();
  }
}
