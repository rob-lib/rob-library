import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  readonly mainKey = 'principal';
  #matrixIds: { [key: string]: boolean } = {};
  #showSpinner = new BehaviorSubject<{ [key: string]: boolean }>({});

  showSpinner$ = this.#showSpinner.asObservable();

  show(id = this.mainKey): void {
    this.#addId(id).then(() => this.#showSpinner.next(this.#matrixIds));
  }

  hiden(id = this.mainKey): void {
    this.#removeId(id).then(() => this.#showSpinner.next(this.#matrixIds));
  }

  async #addId(id: string): Promise<void> {
    return new Promise<void>(res => {
      this.#foo(id, true, `Spinner Id ${id} already exists`);
      res();
    });
  }

  async #removeId(id: string): Promise<void> {
    return new Promise<void>(res => {
      this.#foo(id, false, `Spinner Id ${id} don't exists`);
      res();
    });
  }

  #foo(id: string, value: boolean, errorText: string): void {
    if (!!Object.keys(this.#matrixIds).find(v => v === id) === !value) {
      this.#matrixIds[id] = value;
    } else {
      console.warn(errorText);
    }
  }
}
