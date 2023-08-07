import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class HashService {
  generateHash(value: string): string {
    return CryptoJS.MD5(value).toString();
  }
}