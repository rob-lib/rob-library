import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeathsRoutingModule } from './deaths-routing.module';
import { DeathsComponent } from './deaths.component';

@NgModule({
  declarations: [DeathsComponent],
  imports: [
    CommonModule,
    DeathsRoutingModule,
  ]
})
export class DeathsModule { }
