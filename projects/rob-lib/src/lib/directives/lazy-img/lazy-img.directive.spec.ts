import { LazyImgDirective } from './lazy-img.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { getFixtureNativeElement } from '@robLib/helpers/spec-helpers';

@Component({
  template: '<img src="" alt="characterDetail.img_alt" />',
})
class MockComponent {}

describe('GIVEN LazyImgDirective', () => {
  let directive: LazyImgDirective;
  let fixture: ComponentFixture<MockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockComponent],
      imports: [LazyImgDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(MockComponent);
    fixture.detectChanges();
    directive = new LazyImgDirective(fixture);
  });

  it('SHOULD create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('ONCE initialized', () => {
    let fixtureNativeElement: HTMLImageElement;

    beforeEach(() => {
      fixtureNativeElement = getFixtureNativeElement(fixture);
    });

    it('SHOULD be checked attribute lazy', () => {
      expect(fixtureNativeElement.getAttribute('loading')).toEqual('lazy');
    });
  });
});
