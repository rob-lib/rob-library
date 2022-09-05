import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  #showSpinner = new BehaviorSubject<boolean>(false);
  showSpinner$ = this.#showSpinner.asObservable();

  show(): void {
    this.#showSpinner.next(true);
  }

  hiden(): void {
    this.#showSpinner.next(false);
  }
}
