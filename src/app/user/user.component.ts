import {Component, Input, OnInit} from '@angular/core';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, User {

  constructor() {
    this.firstName = 'Maria';
    this.lastName = 'Kasianova';
    this.id = '1234';
  }

  @Input()
  public firstName: string;
  public id: string;
  public lastName: string;

  ngOnInit(): void {
  }

}
