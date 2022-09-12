/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SpinnerModule } from '@robLib/modules/spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LateralMenuComponent } from './layout/lateral-menu/lateral-menu.component';
import { CustomTranslateModule } from '@robLib/modules';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './layout/header/header.component';

const StandaloneComponents = [
  LateralMenuComponent,
  NotFoundComponent,
  HeaderComponent
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SpinnerModule,
    CustomTranslateModule,
    StandaloneComponents,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
