import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: any;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  @Input()

  ngOnInit(): void {

    this.authService.getUserInfo()
      .pipe(map(item => this.user = item))
      .subscribe({});
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
