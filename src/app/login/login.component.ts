import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../shared/authentication.service';
import {CoursesService} from '../shared/courses.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void {
    this.authService.login(f.form.value);
    this.router.navigate(['courses']);
  }

}
