import { Component, Input } from '@angular/core';
import { MaterialAngularThemes } from '../../models/material-angular-themes.enum';
import { SpinnerService } from './spinner.service';
import { filter } from "rxjs/operators";

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
  @Input() spinnerId = this.spinnerService.mainKey;
  @Input() color: MaterialAngularThemes = MaterialAngularThemes.primary;

  readonly showSpinner$ = this.spinnerService.showSpinner$.pipe(filter(v => v[this.spinnerId]));

  constructor(private spinnerService: SpinnerService) {}
}
