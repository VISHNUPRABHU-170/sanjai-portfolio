import { Component, Input } from '@angular/core';
import { HomeComponentModel } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() config!: HomeComponentModel;
}
