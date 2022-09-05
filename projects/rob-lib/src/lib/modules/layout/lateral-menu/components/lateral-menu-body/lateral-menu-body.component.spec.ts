import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralMenuBodyComponent } from './lateral-menu-body.component';

describe('LateralMenuBodyComponent', () => {
  let component: LateralMenuBodyComponent;
  let fixture: ComponentFixture<LateralMenuBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LateralMenuBodyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LateralMenuBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
