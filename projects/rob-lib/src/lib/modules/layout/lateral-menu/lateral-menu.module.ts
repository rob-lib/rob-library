import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralMenuComponent } from './lateral-menu.component';
import { LateralMenuBodyComponent } from './components/lateral-menu-body/lateral-menu-body.component';
import { LateralMenuFooterComponent } from './components/lateral-menu-footer/lateral-menu-footer.component';

@NgModule({
  declarations: [LateralMenuComponent],
  imports: [
    CommonModule,
    LateralMenuBodyComponent,
    LateralMenuFooterComponent,
  ],
  exports: [
    LateralMenuComponent,
    LateralMenuBodyComponent,
    LateralMenuFooterComponent,
  ],
})
export class LateralMenuModule {}
