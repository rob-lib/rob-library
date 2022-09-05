import { Component, Input } from '@angular/core';
import { MaterialAngularThemes } from '@robLib/models/material-angular-themes.enum';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'rob-spinner',
  template: `
    <section class="rob-spinner_content" *ngIf="showSpinner$ | async">
      <mat-spinner [color]="color"></mat-spinner>
    </section>
  `,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input() color: MaterialAngularThemes = MaterialAngularThemes.primary;

  readonly showSpinner$ = this.spinnerService.showSpinner$;

  constructor(private spinnerService: SpinnerService) {}
}
