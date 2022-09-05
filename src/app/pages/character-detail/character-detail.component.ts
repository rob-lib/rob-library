import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';

import { CharacterService } from '@shared/services/character/character.service';
import { QuoteService } from '@shared/services/quote/quote.service';
import { Rotate } from '@robLib/animations/rotate';
import { Character, Quote } from '@shared/models';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
  animations: [Rotate('refresh')],
})
export class CharacterDetailComponent implements OnInit {
  quote!: Quote;
  character!: Character;
  quoteLoading!: boolean;
  imgAlt!: { name: string; nickname: string };

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    private characterService: CharacterService,
    private quoteService: QuoteService
  ) {}

  ngOnInit(): void {
    this.#getCharacterDetail();
  }

  getRandomQuote(): void {
    this.quoteLoading = true;

    const getQuote = (quotes: Quote[]) => {
      const rand = this.#getRandomArbitrary(quotes.length - 1);
      return quotes[rand];
    };

    this.quoteService
      .getQuoteByAuthor(this.character.name)
      .pipe(map(getQuote))
      .subscribe({
        next: res => (this.quote = res),
        complete: () => (this.quoteLoading = false),
      });
  }

  #getCharacterDetail(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +(params.get('id') as string);
      this.characterService.get(id).subscribe({
        next: res => {
          this.character = res;
          this.#setImgAlt(res);
          this.#setMetaTitle(res.name);
          this.getRandomQuote();
        },
      });
    });
  }

  #setImgAlt(character: Character): void {
    this.imgAlt = { name: character.name, nickname: character.nickname };
  }

  #setMetaTitle(title: string): void {
    this.titleService.setTitle(`${this.translateService.instant('character')} | ${title}`);
  }

  #getRandomArbitrary(max: number, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
