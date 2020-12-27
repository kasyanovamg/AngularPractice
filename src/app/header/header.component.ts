import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

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
