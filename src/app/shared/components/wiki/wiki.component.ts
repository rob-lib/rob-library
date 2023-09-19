import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiData } from './models/wiki-data.model';
import { MatTabsModule } from '@angular/material/tabs';
import { CodeBoxModule } from '@robLib/modules';

@Component({
  selector: 'app-wiki',
  standalone: true,
  imports: [CommonModule, CodeBoxModule, MatTabsModule],
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss'],
})
export class WikiComponent {
  @Input() template!: WikiData;
}
