import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rob-lateral-menu-body',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rob-lateral-menu-body_containter">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./lateral-menu-body.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LateralMenuBodyComponent {}
