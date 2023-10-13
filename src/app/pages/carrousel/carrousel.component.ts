import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, CarouselItemModel, VerticalCarouselModule } from '@robLib/modules';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, VerticalCarouselModule],
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent {
  readonly carouselData: CarouselItemModel[] = [
    { src: 'http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript' },
    { src: 'http://fakeimg.pl/2000x800/F90/fff/?text=Carousel' },
    { src: 'http://fakeimg.pl/2000x800/F90/fff/?text=OTRO' },
  ];

  // readonly verticalCarouselData: VerticalCarouselItemModel[] = [
  //   { icon: '🐋', title: 'whale', description: 'U+1F40B' },
  //   { icon: '🐬', title: 'dolphin', description: 'U+1F42C' },
  //   { icon: '🐟', title: 'fish', description: 'U+1F41F' },
  //   { icon: '🐠', title: 'tropical fish', description: 'U+1F420' },
  //   { icon: '🐡', title: 'blowfish', description: 'U+1F421' },
  //   { icon: '🦈', title: 'shark', description: 'U+1F988' },
  //   { icon: '🐙', title: 'octopus', description: 'U+1F419' },
  //   { icon: '🐚', title: 'spiral shell', description: 'U+1F41A' },
  // ];
}
