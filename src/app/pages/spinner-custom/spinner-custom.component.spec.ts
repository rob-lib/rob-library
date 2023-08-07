import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCustomComponent } from './spinner-custom.component';

describe('SpinnerCustomComponent', () => {
  let component: SpinnerCustomComponent;
  let fixture: ComponentFixture<SpinnerCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SpinnerCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
