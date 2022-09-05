import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Quote } from '../../models/quote';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private readonly ENDPOINT = `${environment.endpointApi}/api/quote`;
  private readonly HEADERS = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) {}

  getQuoteByAuthor(autor: string) {
    return this.#callApi<Quote[]>(`${this.ENDPOINT}?author=${this.#normalizat(autor)}`);
  }

  #normalizat(value: string) {
    return value.replace(/ /g, '+');
  }

  #callApi<T>(path: string) {
    return this.http.get<T>(path, { headers: this.HEADERS });
  }
}
