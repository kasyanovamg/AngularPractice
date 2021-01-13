import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() public crumbName?: string;

  constructor() { }

  ngOnInit(): void {
    this.crumbName = this.crumbName ? `/ ${this.crumbName}` : '/ New Course';
  }

}
