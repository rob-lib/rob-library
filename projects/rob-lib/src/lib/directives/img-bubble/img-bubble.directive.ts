import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'img[bubble]',
  standalone: true,
})
export class ImgBubbleDirective implements OnInit {
  @Input() width!: string;
  @Input() height!: string;
  nativeElement: HTMLImageElement;

  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    this.nativeElement = nativeElement;
  }

  ngOnInit(): void {
    this.nativeElement.style.width = this.width;
    this.nativeElement.style.height = this.height;
    this.nativeElement.style.borderRadius = '100%';
    this.nativeElement.style.objectFit = 'cover';
    this.nativeElement.style.objectPosition = 'top';
    this.nativeElement.style.aspectRatio = '1/2';
  }
}
