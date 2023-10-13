import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule, HeaderService } from '@robLib/modules';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderModule, MatMenuModule, MatSelectModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  headerTitle = 'RobLibrary';
  langs = this.headerService.getLangs();

  constructor(public headerService: HeaderService) {}
}
