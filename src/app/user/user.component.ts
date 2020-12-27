import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private userInfo: {email: string};
  public userEmail: string;

  constructor(private authService: AuthenticationService) {
    this.userInfo = { email : '' };
    this.userEmail = '';
  }

  @Input()

  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();
    this.userEmail = this.userInfo?.email;
  }

  onLogout(): void {
    return this.authService.logout();
  }

}
