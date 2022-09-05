import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOfCharactersComponent } from './list-of-characters.component';

const routes: Routes = [{ path: '', component: ListOfCharactersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListOfCharactersRoutingModule { }
