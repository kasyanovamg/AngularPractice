import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {

  }

  login({login, password}: { login: string; password: string }): any {
    return this.http.post(`${environment.apiUrl}auth/login`, {login, password})
      .pipe(map(token => {
        localStorage.setItem('authToken', JSON.stringify(token));
        return token;
      }));
  }

  logout(): void {
    localStorage.setItem('authToken', JSON.stringify(''));
  }

  isAuthenticated(): boolean {
    return !!JSON.parse(localStorage.getItem('authToken') as string)?.token;
  }

  getUserInfo(): any {
    const authToken: string = localStorage.getItem('authToken') as string;
    const token = JSON.parse(authToken)?.token;

    return this.http.post(`${environment.apiUrl}auth/userinfo`, {token}, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }));
  }
}
