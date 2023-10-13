import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CarouselItemPartial } from './models/carousel-item.model';
import { VerticalCarouselItemComponent } from './components/vertical-carousel-item/vertical-carousel-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselAnimateVertical } from '@robLib/animations';

@Component({
  selector: 'rob-vertical-carousel',
  standalone: true,
  imports: [CommonModule, VerticalCarouselItemComponent],
  providers: [BrowserAnimationsModule],
  templateUrl: './vertical-carousel.component.html',
  styleUrls: ['./vertical-carousel.component.scss'],
  animations: [CarouselAnimateVertical('carousel', 9, 3)],
})
export class VerticalCarouselComponent implements OnInit {
  @Input() items!: CarouselItemPartial[];
  @Input() maxHeight = '500px';
  carouselItems!: any[];

  ngOnInit(): void {
    this.carouselItems = this.items.map((v, i) => ({ ...v, id: i }));
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
