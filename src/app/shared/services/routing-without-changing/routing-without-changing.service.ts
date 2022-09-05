import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoutingWithoutChangingService {
  constructor(private router: Router) {}

  run(path: string) {
    this.router.navigate([path], { skipLocationChange: true });
  }
}
