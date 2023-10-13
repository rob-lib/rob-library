import '../../../../../helpers/string.extensions';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItem } from '../../models/carousel-item.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'rob-vertical-carousel-item',
  standalone: true,
  imports: [CommonModule],
  providers: [BrowserAnimationsModule],
  templateUrl: './vertical-carousel-item.component.html',
  styleUrls: ['./vertical-carousel-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalCarouselItemComponent implements OnInit {
  @Input() item!: CarouselItem;
  @Input() height = '100px';

  ngOnInit(): void {
    this.item.icon.isLink();
  }
}
