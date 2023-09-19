import { Component, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
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
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss'],
  animations: [Expand('click')],
})
export class CodeBoxComponent implements AfterViewInit {
  @ViewChild('codeBox') codeBox!: ElementRef<any>;
  @ViewChild('tooltip') tooltip!: MatTooltip;
  @Input() tooltipMessage = 'Copy on clipboard';

  clipboardData!: string;
  clickAction = false;
  showTooltip = false;

  constructor(private clipboard: Clipboard) {}

  ngAfterViewInit(): void {
    this.clipboardData = (this.codeBox.nativeElement.childNodes[1].data as string).trim();
  }

  copyClipboard(): void {
    this.clickAction = true;
    this.tooltip.disabled = false;
    this.tooltip.show();
    this.clipboard.copy(this.clipboardData);

    setTimeout(() => {
      this.clickAction = false;
    }, 5000);
  }
}
