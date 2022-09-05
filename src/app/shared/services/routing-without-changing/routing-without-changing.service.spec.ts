import { TestBed } from '@angular/core/testing';

import { RoutingWithoutChangingService } from './routing-without-changing.service';

describe('RoutingWithoutChangingService', () => {
  let service: RoutingWithoutChangingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingWithoutChangingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
