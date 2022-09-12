import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { ImgBubbleDirective, LazyImgDirective } from '@robLib/directives';

import { ListOfCharactersRoutingModule } from './list-of-characters-routing.module';
import { ListOfCharactersComponent } from './list-of-characters.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    ListOfCharactersComponent,
    CharacterItemComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ListOfCharactersRoutingModule,
    MatCardModule,
    LazyImgDirective,
    ImgBubbleDirective,
    NgScrollbarModule
  ]
})
export class ListOfCharactersModule { }
