import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login(userInfo: {email: ''}): void {
    localStorage.setItem('userInfo', JSON.stringify({email: userInfo.email}));
  }

  logout(): void {
    localStorage.setItem('userInfo', JSON.stringify(''));
  }

  isAuthenticated(): boolean {
    return !!JSON.parse(localStorage.getItem('userInfo') as string)?.email;
  }

  getUserInfo(): any {
    const storageItem = localStorage.getItem('userInfo');
    return JSON.parse(storageItem as string);
  }
}
