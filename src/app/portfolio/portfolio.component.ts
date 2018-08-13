import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Project } from '../app.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {

  images: Array<string>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { project: Project }) {}

  ngOnInit() {
    this.images = this.data.project.gallery;
  }

}
