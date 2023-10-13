import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CarouselItem } from './models/carousel-item.model';

interface CarouselItemCustom extends CarouselItem {
  id: string;
  checked: boolean;
  labels: {
    prev: { for: string; class: string };
    next: { for: string; class: string };
  };
}

@Component({
  selector: 'rob-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit {
  @Input() data!: CarouselItem[];
  carouselData!: CarouselItemCustom[];

  ngOnInit(): void {
    if (this.data.length <= 10) {
      this.carouselData = this.#transformData(this.data);
    } else {
      console.error(new Error(`maximum length of 10 has been exceeded`));
    }
  }

  #transformData(images: CarouselItem[]): CarouselItemCustom[] {
    return images.map((image, index, array) => {
      const id = `carousel-${index + 1}`;
      const checked = index === 0;
      const labels = {
        prev: {
          for: `carousel-${index === 0 ? array.length : index}`,
          class: `control-${index + 1}`,
        },
        next: {
          for: `carousel-${index === array.length - 1 ? 1 : index + 2}`,
          class: `control-${index + 1}`,
        },
      };

      return { ...image, id, checked, labels };
    });
  }
}
