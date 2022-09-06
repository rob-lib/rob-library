/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';

import { SpinnerModule } from '@robLib/modules/spinner';
import { CustomTranslateModule } from '@robLib/modules/custom-translate';
import { HeaderModule, LateralMenuModule } from '@robLib/modules/layout';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LateralMenuComponent } from './layout/lateral-menu/lateral-menu.component';

const StandaloneComponents = [
  LateralMenuComponent
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StandaloneComponents,
    LateralMenuModule,
    BrowserAnimationsModule,
    SpinnerModule,
    HeaderModule,
    NgScrollbarModule,
    CustomTranslateModule,
    MatSelectModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
