import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rob-lateral-menu-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rob-lateral-menu-footer_containter">
      <ng-content></ng-content>
    </div>
  `,
})
export class LateralMenuFooterComponent {}
