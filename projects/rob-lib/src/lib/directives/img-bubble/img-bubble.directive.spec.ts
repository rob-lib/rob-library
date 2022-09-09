import { Component } from '@angular/core';
import { ImgBubbleDirective } from './img-bubble.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getFixtureNativeElement } from '@robLib/helpers/spec-helpers';

@Component({
  template: '<img bubble src="" />',
})
class MockComponent {}

describe('GIVEN ImgBubbleDirective', () => {
  let directive: ImgBubbleDirective;
  let fixture: ComponentFixture<MockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockComponent],
      imports: [ImgBubbleDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(MockComponent);
    fixture.detectChanges();

    directive = new ImgBubbleDirective(fixture);
  });

  it('SHOULD create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it("SHOULDN'T be the class initially", () => {
    expect(fixture.nativeElement.style.borderRadius).toEqual('');
    expect(fixture.nativeElement.style.objectFit).toEqual('');
    expect(fixture.nativeElement.style.objectPosition).toEqual('');
    expect(fixture.nativeElement.style.aspectRatio).toEqual('');
  });

  describe('ONCE initialized', () => {
    let fixtureNativeElement: any;

    beforeEach(() => {
      fixtureNativeElement = getFixtureNativeElement(fixture);
    });

    it('SHOULD be checked styles', () => {
      expect(fixtureNativeElement.style.borderRadius).toEqual('100%');
      expect(fixtureNativeElement.style.objectFit).toEqual('cover');
      expect(fixtureNativeElement.style.objectPosition).toEqual('center top');
      expect(fixtureNativeElement.style.aspectRatio).toEqual('1 / 2');
    });
  });
});
