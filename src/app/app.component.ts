import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthenticationService} from './shared/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'My first angular';
  public isAuth: boolean;

  public tempAddCourse: boolean; // todo: remove when routing will be implemented

  constructor(private authService: AuthenticationService) {
    this.isAuth = false;
    this.tempAddCourse = true;
  }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated();
  }

  ngDoCheck(): void {
    this.isAuth = this.authService.isAuthenticated();
  }
}
