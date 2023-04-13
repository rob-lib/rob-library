import { animate, style, transition, trigger } from '@angular/animations';

export function Expand(id: string) {
  return trigger(id, [
    transition('false => true', [
      style({ transform: 'scale(1.5)' }),
      animate('0.25s', style({ transform: 'scale(0.5)' })),
    ]),
  ]);
}
