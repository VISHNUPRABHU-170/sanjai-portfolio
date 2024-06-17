import { Component } from '@angular/core';
import { HEADER_CONFIG } from './portfolio-config';
import { HeaderComponentModel } from '../header/header.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  headerConfig: HeaderComponentModel = HEADER_CONFIG;
}
