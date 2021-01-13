import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private userInfo: {email: string};
  public userEmail: string;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.userInfo = { email : '' };
    this.userEmail = '';
  }

  @Input()

  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();
    this.userEmail = this.userInfo?.email;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
