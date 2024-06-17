import { Component, Input } from '@angular/core';
import { IconModel } from './icon.model';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() config!: IconModel;
}
