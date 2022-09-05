import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeathsComponent } from './deaths.component';

const routes: Routes = [{ path: '', component: DeathsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeathsRoutingModule { }
