import {inject, Injectable, InjectionToken, Injector} from '@angular/core';


const APP_STORAGE = new InjectionToken('userInfo', {
  providedIn: 'root',
  factory: () => sessionStorage
});

// const injector = Injector.create({providers: [{provide: APP_STORAGE, useValue: 'http://localhost'}]});

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login(): void {

  }

  logout(): void {

  }

  isAuthenticated(): boolean {
    return false;
  }

  getUserInfo(): any {

  }
}


// const MY_SERVICE_TOKEN = new InjectionToken<AuthenticationService>('Manually constructed MyService', {
//   providedIn: 'root',
//   factory: () => new AuthenticationService(inject(true)),
// });
