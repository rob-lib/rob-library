import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { LazyImgDirective } from '@robLib/directives';
import { NormalizedDatePipe } from '@shared/pipes/normalized-date.pipe';

import { CharacterDetailRoutingModule } from './character-detail-routing.module';
import { CharacterDetailComponent } from './character-detail.component';

@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatExpansionModule,
    CharacterDetailRoutingModule,
    NormalizedDatePipe,
    LazyImgDirective,
  ],
})
export class CharacterDetailModule {}
