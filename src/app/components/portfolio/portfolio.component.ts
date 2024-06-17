import { Component } from '@angular/core';
import { HEADER_CONFIG, HOME_CONFIG } from './portfolio-config';
import { HeaderComponentModel } from '../header/header.model';
import { HomeComponentModel } from '../home/home.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  headerConfig: HeaderComponentModel = HEADER_CONFIG;
  homeConfig: HomeComponentModel = HOME_CONFIG;
}
