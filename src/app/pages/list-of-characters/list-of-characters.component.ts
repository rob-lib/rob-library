import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '@robLib/modules/spinner';
import { Character } from '@shared/models/character.model';
import { CharacterService } from '@shared/services/character/character.service';

@Component({
  templateUrl: './list-of-characters.component.html',
  styleUrls: ['./list-of-characters.component.scss'],
})
export class ListOfCharactersComponent implements OnInit {
  characterList!: Character[];

  constructor(
    private characterService: CharacterService,
    private spinnerService: SpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.#getList();
  }

  a(id: number) {
    this.router.navigate(['characters', id]);
  }

  #getList() {
    this.spinnerService.show();
    this.characterService.getList().subscribe({
      next: res => (this.characterList = res),
      complete: () => this.spinnerService.hiden(),
    });
  }
}
