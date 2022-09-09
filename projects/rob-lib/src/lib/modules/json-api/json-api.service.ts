import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './models/request';

@Injectable({
  providedIn: 'root',
})
export class JsonApiService {
  private readonly HEADERS = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) {}

  callApi<T>(path: string): Observable<T> {
    return this.http.get<T>(path, { headers: this.HEADERS });
  }

  generateUrl(path: string, o?: Request): string {
    return o ? `${path}/${Request.generate(o)}` : path;
  }
}
