import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LateralMenuModule } from '@robLib/modules/layout';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-lateral-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, LateralMenuModule, TranslateModule],
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.scss'],
})
export class LateralMenuComponent {
  readonly author = 'Robert García Morel';
}
