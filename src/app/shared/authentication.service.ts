import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuth = false;

  constructor() { }

  login(userInfo: {email: ''}): void {
    this.isAuth = true;
    localStorage.setItem('userInfo', JSON.stringify({email: userInfo.email}));
  }

  logout(): void {
    this.isAuth = false;
    localStorage.setItem('userInfo', JSON.stringify(''));
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }

  getUserInfo(): any {
    const storageItem = localStorage.getItem('userInfo');
    return JSON.parse(storageItem as string);
  }
}
