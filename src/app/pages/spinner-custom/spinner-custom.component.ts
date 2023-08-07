import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerModule, SpinnerService } from '@robLib/modules';

@Component({
  selector: 'app-spinner-custom',
  standalone: true,
  imports: [CommonModule, SpinnerModule],
  templateUrl: './spinner-custom.component.html',
  styleUrls: ['./spinner-custom.component.scss']
})
export class SpinnerCustomComponent {
  readonly spinnerKey = 'testSpinnerCustom'

  constructor(
    private spinnerService: SpinnerService
  ) {}

  on(): void {
    this.spinnerService.show(this.spinnerKey);
  }

  off(): void {
    this.spinnerService.hiden(this.spinnerKey);
  }
}
