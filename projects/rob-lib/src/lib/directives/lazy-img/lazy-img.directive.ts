/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img:not([loading])',
  standalone: true,
})
export class LazyImgDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}
