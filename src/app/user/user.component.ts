import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public userEmail: string;

  constructor(private authService: AuthenticationService) {
    this.userEmail = '';
  }

  @Input()

  ngOnInit(): void {
    this.userEmail = this.authService.getUserInfo()?.email;
  }

  onLogout(): void {
    return this.authService.logout();
  }

}
