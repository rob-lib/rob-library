import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent) },
  { path: 'text', loadComponent: () => import('./pages/text/text.component').then(mod => mod.TextComponent) },
  { path: '404', loadComponent: () => import('./pages/not-found/not-found.component').then(mod => mod.NotFoundComponent) },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
