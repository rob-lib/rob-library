import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule, HeaderService } from '@robLib/modules';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderModule, MatSelectModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerTitle = 'The Breaking Bad';
  langs = this.headerService.getLangs();

  constructor(public headerService: HeaderService) {}
}
