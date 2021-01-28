import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';
import {Router} from '@angular/router';
import {getUser} from '../+store/authActions';
import {select, Store} from '@ngrx/store';
import { selectUserName} from './user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user$: any;

  constructor(private authService: AuthenticationService, private router: Router, private store: Store<any>) {
    this.user$ = this.store.pipe(select(selectUserName));

  }

  @Input()

  ngOnInit(): void {
    this.store.dispatch(getUser());
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
