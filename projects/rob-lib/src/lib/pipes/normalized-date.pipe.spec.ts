import { TestBed } from '@angular/core/testing';
import { CustomTranslateModule } from '@robLib/modules/custom-translate';
import { NormalizedDatePipe } from './normalized-date.pipe';

describe('GIVEN NormalizedDatePipe', () => {
  let pipe: NormalizedDatePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomTranslateModule, NormalizedDatePipe],
    }).compileComponents();

    pipe = new NormalizedDatePipe('es');
  });

  it('SHOULD create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('SHOULD pipe transform', () => {
    it('date value', () => {
      const date = '09-07-1958';
      expect(pipe.transform(date)).toEqual('7 sept 1958');
    });

    it('string value Unknown', () => {
      const date = 'Unknown';
      expect(pipe.transform(date)).toEqual('---');
    });

    it('NULL value', () => {
      const date = null;
      expect(pipe.transform(date)).toEqual('---');
    });

    it('undefined value', () => {
      const date = undefined;
      expect(pipe.transform(date)).toEqual('---');
    });
  });
});
