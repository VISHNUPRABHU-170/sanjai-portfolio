import { Component, Input } from '@angular/core';
import { HeaderComponentModel } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() config!: HeaderComponentModel;
}
