import '../helpers/number.extensions';
import { keyframes, style, trigger, transition, animate, query } from '@angular/animations';

export function CarouselAnimateVertical(id: string, length: number, viewItems = 3) {
  const animationStepsFraction = 100 / length;
  const carouselAnimateVerticalKeyframes = keyframes([
    style({ offset: 0, transform: 'translateY(100%) scale(0.5)', opacity: 0, visibility: 'hidden' }),
    style({
      offset: viewItems.toPercent(),
      transform: 'translateY(100%) scale(0.7)',
      opacity: 0.4,
      visibility: 'visible',
    }),
    style({
      offset: animationStepsFraction.toPercent(),
      transform: 'translateY(100%) scale(0.7)',
      opacity: 0.4,
      visibility: 'visible',
    }),
    style({
      offset: (animationStepsFraction + viewItems).toPercent(),
      transform: 'translateY(0) scale(1)',
      opacity: 1,
      visibility: 'visible',
    }),
    style({
      offset: (animationStepsFraction * 2).toPercent(),
      transform: 'translateY(0) scale(1)',
      opacity: 1,
      visibility: 'visible',
    }),
    style({
      offset: (animationStepsFraction * 2 + viewItems).toPercent(),
      transform: 'translateY(-100%) scale(0.7)',
      opacity: 0.4,
      visibility: 'visible',
    }),
    style({
      offset: (animationStepsFraction * 3).toPercent(),
      transform: 'translateY(-100%) scale(0.7)',
      opacity: 0.4,
      visibility: 'visible',
    }),
    style({
      offset: (animationStepsFraction * 3 + viewItems).toPercent(),
      transform: 'translateY(-100%) scale(0.5)',
      opacity: 0,
      visibility: 'visible',
    }),
    style({ offset: 1, transform: 'translateY(-100%) scale(0.5)', opacity: 0, visibility: 'hidden' }),
  ]);

  return trigger(id, [
    transition(':enter', [query(':self', [animate('5s {{delay}}s', carouselAnimateVerticalKeyframes)])], {
      params: { delay: 10 },
    }),
  ]);
}
