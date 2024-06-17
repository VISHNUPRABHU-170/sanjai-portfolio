import { Component, Input } from '@angular/core';
import { NavBarModel } from './nav-bar.model';
import { ButtonModel } from '../button/button.model';
import { OutputEventModel } from 'src/app/models/output-event.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() config!: NavBarModel;

  handleEvent(event: OutputEventModel) {
    this.handleActive(event.event);
  }

  handleActive(event: ButtonModel) {
    this.config.links.forEach((element) => {
      if (element === event) {
        element.isActive = true;
      } else {
        element.isActive = false;
      }
    });
  }
}
