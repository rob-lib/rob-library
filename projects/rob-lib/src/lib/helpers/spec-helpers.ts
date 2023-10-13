import { ComponentFixture } from '@angular/core/testing';

export function getFixtureNativeElement<T>(fixture: ComponentFixture<any>): T {
  fixture.detectChanges();
  return fixture.debugElement.children[0].nativeElement;
}
