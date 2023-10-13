import { Component, Input } from '@angular/core';

@Component({
  selector: 'rob-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() imgLogo = 'assets/rob.svg';
  @Input() title: string = 'Robert';
}
