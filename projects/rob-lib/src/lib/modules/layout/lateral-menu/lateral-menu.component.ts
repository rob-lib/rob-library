import { Component } from '@angular/core';

@Component({
  selector: 'rob-lateral-menu',
  template: `
    <div class="rob-lateral-menu_containter">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./lateral-menu.component.scss'],
})
export class LateralMenuComponent {}
