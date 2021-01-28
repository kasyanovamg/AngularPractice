import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../shared/authentication.service';
import {Router} from '@angular/router';
import { Store, select } from '@ngrx/store';
import {login} from '../+store/authActions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth$: any;

  constructor(private authService: AuthenticationService, private router: Router, private store: Store<any>) {
    this.auth$ = store.pipe(select('auth'));
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void {
    this.store.dispatch(login(f.form.value));
  }

}
