import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthenticationService} from './shared/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'My first angular';
  public isAuth: boolean;

  constructor(private authService: AuthenticationService) {
    this.isAuth = false;
  }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated();
  }

  ngDoCheck(): void {
    this.isAuth = this.authService.isAuthenticated();
  }
}
