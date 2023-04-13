import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: '404', loadComponent: () => import('./pages/not-found/not-found.component').then(mod => mod.NotFoundComponent) },
  { path: 'characters', loadChildren: () => import('./pages/list-of-characters/list-of-characters.module').then(m => m.ListOfCharactersModule) },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
