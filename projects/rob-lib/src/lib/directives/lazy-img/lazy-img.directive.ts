/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef } from '@angular/core';

/**
 * Añade el attributo loading=lazy en las imagenes que no lo tienen implementado.
 */
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
