import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/models/character.model';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss'],
})
export class CharacterItemComponent implements OnInit {
  @Input() character!: Character;
  imgAlt!: { name: string };

  ngOnInit(): void {
    this.setImgAlt();
  }

  private setImgAlt(): void {
    this.imgAlt = {
      name: this.character.name,
    };
  }
}
