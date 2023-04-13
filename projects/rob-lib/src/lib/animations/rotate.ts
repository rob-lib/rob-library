import { animate, state, style, transition, trigger } from '@angular/animations';

export function Rotate(id: string) {
  return trigger(id, [
    state('true', style({ transform: 'scale(360deg)' })),
    state('false', style({ transform: 'rotate(0deg)' })),
    transition('false => true', animate('2s ease-out')),
    transition('true => false', animate('0s ease-in')),
  ]);
}
