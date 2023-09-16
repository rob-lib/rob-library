import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBoxModule } from '@robLib/modules';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule, CodeBoxModule, MatTabsModule],
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  readonly exemple = '<rob-code-box> Contenido de ejemplo </rob-code-box>';
  readonly apiRef = "import { CodeBoxModule } from '@robLib/modules'";
}
