import { Component, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../animations/animations';
import { MatDialog } from '@angular/material';
import { PortfolioComponent } from './portfolio/portfolio.component';

export interface Project {
  name: string;
  image: string;
  description: string;
  gallery?: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeInAnimation,
  ]
})
export class AppComponent {
  @HostBinding('class')
  hostClass = 'd-block';

  projects: Project[] = [
    {
      name: 'DevFactory - Template Library',
      image: 'assets/images/portfolio/1.png',
      description: 'Website to show usage of custom angular schematics to be used across several company projects.',
      gallery: [
        'assets/images/portfolio/1/1.png',
        'assets/images/portfolio/1/2.png',
        'assets/images/portfolio/1/3.png',
        'assets/images/portfolio/1/4.png',
        'assets/images/portfolio/1/5.png',
      ]
    }, {
      name: 'Codenation - Meeting Coach',
      image: 'assets/images/portfolio/2.png',
      description: 'Custom company project to keep track of team meetings with integration with google calendar.',
      gallery: [
        'assets/images/portfolio/2/1.png',
        'assets/images/portfolio/2/2.png',
        'assets/images/portfolio/2/3.png',
        'assets/images/portfolio/2/4.png',
        'assets/images/portfolio/2/5.png',
      ]
    }, {
      name: 'DevFactory - DevSpaces',
      image: 'assets/images/portfolio/3.png',
      description: 'Application with REST service integration. Electron App and node cli, with socket integration with website and ' +
        'server. Purpose of this project is to create development spaces to be shared within company teams using docker.',
      gallery: [
        'assets/images/portfolio/3/1.png',
        'assets/images/portfolio/3/2.png',
        'assets/images/portfolio/3/3.png',
        'assets/images/portfolio/3/4.png',
        'assets/images/portfolio/3/5.png',
      ]
    }, {
      name: 'Optiva - Kubernetes',
      image: 'assets/images/portfolio/4.png',
      description: 'Internal company project to keep track of kubernetes nodes usage.',
      gallery: [
        'assets/images/portfolio/4/1.png',
        'assets/images/portfolio/4/2.png',
      ]
    }, {
      name: 'Aurea - EngineYard',
      image: 'assets/images/portfolio/5.png',
      description: 'Application to easily deploy company applications using docker.',
      gallery: [
        'assets/images/portfolio/5/1.png',
        'assets/images/portfolio/5/2.png',
        'assets/images/portfolio/5/3.png',
        'assets/images/portfolio/5/4.png',
        'assets/images/portfolio/5/5.png',
        'assets/images/portfolio/5/6.png',
      ]
    }, {
      name: 'DevFactory - Angular Components Library',
      image: 'assets/images/portfolio/6.png',
      description: 'Custom angular components library to be used across all company projects. Using ngc and rollup to publish npm ' +
        'repository in custom nexus server.',
      gallery: [
        'assets/images/portfolio/6/1.png',
        'assets/images/portfolio/6/2.png',
        'assets/images/portfolio/6/3.png',
        'assets/images/portfolio/6/4.png',
        'assets/images/portfolio/6/5.png',
        'assets/images/portfolio/6/6.png',
        'assets/images/portfolio/6/7.png',
        'assets/images/portfolio/6/8.png',
      ]
    }
  ];

  constructor(public dialog: MatDialog) {}

  openPortfolio(project: Project): void {
    this.dialog.open(PortfolioComponent, {
      width: '1200px',
      data: {project: project}
    });
  }
}
