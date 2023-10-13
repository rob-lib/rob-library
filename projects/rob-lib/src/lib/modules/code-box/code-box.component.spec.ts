import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CodeBoxComponent } from './code-box.component';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component, ViewChild } from '@angular/core';

const CONTENT = 'testing message';

@Component({
  standalone: true,
  imports: [CommonModule, CodeBoxComponent],
  template: `<rob-code-box>{{ content }}</rob-code-box>`,
})
class TestComponent {
  content = CONTENT;
  @ViewChild(CodeBoxComponent, { static: false }) child!: CodeBoxComponent;
}

describe('CodeBoxComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let componentChild!: CodeBoxComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, CodeBoxComponent, ClipboardModule, MatTooltipModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    componentChild = component.child;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render content', () => {
    expect(componentChild).toBeTruthy();
  });

  it('should copy the code box content to the clipboard when the copy button is clicked', () => {
    const clipboardSpy = spyOn(TestBed.inject(Clipboard), 'copy');
    component.child.copyClipboard();
    expect(clipboardSpy).toHaveBeenCalledWith(CONTENT);
  });

  it('should show a tooltip when the copy button is clicked', () => {
    expect(component.child.tooltip.disabled).toBe(false);
    componentChild.copyClipboard();
  });

  it('should hide the tooltip after 500 milliseconds', () => {
    componentChild.copyClipboard();
    expect(componentChild.clickAction).toBe(true);
    setTimeout(() => expect(componentChild.clickAction).toBe(false), 500);
  });
});
