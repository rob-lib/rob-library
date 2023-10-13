import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltip, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MatTooltipModule } from '@angular/material/tooltip';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { Expand } from '../../animations';

@Component({
  selector: 'rob-code-box',
  standalone: true,
  imports: [CommonModule, ClipboardModule, MatIconModule, MatTooltipModule, HammerModule],
  providers: [
    MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig },
  ],
  template: `
    <div class="code-box__container" #codeBox>
      <ng-content></ng-content>
      <mat-icon
        [@click]="clickAction"
        (click)="copyClipboard()"
        #tooltip="matTooltip"
        [matTooltip]="tooltipMessage"
        disableTooltipInteractivity="true">
        content_paste
      </mat-icon>
    </div>
  `,
  styleUrls: ['./code-box.component.scss'],
  animations: [Expand('click')],
})
export class CodeBoxComponent {
  @ViewChild('codeBox', { static: true }) codeBox!: ElementRef<any>;
  @ViewChild('tooltip', { static: true }) tooltip!: MatTooltip;
  @Input() tooltipMessage = 'Copy on clipboard';

  clickAction = false;
  showTooltip = false;

  constructor(private clipboard: Clipboard) {}

  copyClipboard(): void {
    this.clickAction = true;
    this.tooltip.disabled = false;
    this.tooltip.show();
    const [{ textContent }] = this.codeBox.nativeElement.childNodes;
    this.clipboard.copy(textContent);

    setTimeout(() => {
      this.clickAction = false;
    }, 500);
  }
}
