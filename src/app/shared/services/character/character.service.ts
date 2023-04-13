import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Character } from '../../models/character.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly ENDPOINT = `${environment.endpointApi}/character`;
  private readonly HEADERS = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) {}

  get(id: number): Observable<Character> {
    return this.#callApi<Character>(`${this.ENDPOINT}/${id}`).pipe(map(({ results = [] }: any) => results[0]));
  }

  getList(): Observable<Character[]> {
    return this.#callApi<Character[]>(this.ENDPOINT).pipe(map(({ results = [] }: any) => results));
  }

  #callApi<T>(path: string) {
    return this.http.get<T>(path, { headers: this.HEADERS });
  }
}
