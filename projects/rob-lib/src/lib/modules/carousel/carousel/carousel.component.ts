import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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
export class CarouselComponent {
  @Input() set data(value: CarouselItem[]) {
    this.#setData(value);
  }
  carouselData!: CarouselItemCustom[];

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

  #setData(value: CarouselItem[]) {
    try {
      if (value.length <= 10) {
        this.carouselData = this.#transformData(value);
      } else {
        throw new Error(`maximum length of 10 has been exceeded`);
      }
    } catch (err) {
      console.error(err);
    }
  }
}
