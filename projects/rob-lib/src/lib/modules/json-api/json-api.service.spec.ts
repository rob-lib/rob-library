import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { JsonApiService } from './json-api.service';

describe('GIVEN JsonApiService', () => {
  let service: JsonApiService;
  const ENDPOINT = 'https://breakingbadapi.com/api';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(JsonApiService);
  });

  it('SHOULD be created', () => {
    expect(service).toBeTruthy();
  });

  it('SHOULD call api', done => {
    const path = service.generateUrl(ENDPOINT, { filed: 'characters' });

    service.callApi<any[]>(path).subscribe({
      next: res => expect(!!res.length).toEqual(true),
      complete: done,
    });
  });
});
