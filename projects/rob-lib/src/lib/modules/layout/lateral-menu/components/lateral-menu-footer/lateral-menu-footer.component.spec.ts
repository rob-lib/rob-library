import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralMenuFooterComponent } from './lateral-menu-footer.component';

describe('LateralMenuFooterComponent', () => {
  let component: LateralMenuFooterComponent;
  let fixture: ComponentFixture<LateralMenuFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LateralMenuFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LateralMenuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
