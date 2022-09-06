import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { HeaderService } from './services/header.service';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  providers: [HeaderService],
  exports: [HeaderComponent]
})
export class HeaderModule { }
