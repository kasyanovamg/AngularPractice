import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {AuthenticationService} from '../shared/authentication.service';
import {getUser, login, logout, userLoaded, userLoggedIn} from '../+store/authActions';
import {concatMap, map} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthenticationService, private router: Router) {
  }

  @Effect()
  loadLoginRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      concatMap((res) => this.authService.login(res)),
      map((payload: any) => {
        if (payload.token) {
          this.router.navigate(['courses']);
        }
        return userLoggedIn({payload});
      })
    );
  });

  @Effect()
  getUserInfoRequest$ = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(getUser),
          concatMap(() => this.authService.getUserInfo()),
          map((payload: any) => userLoaded({payload}))
        );
    }
  );

  @Effect()
  logOutUser$ = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(logout),
          concatMap(() => this.authService.logout()),
          map((payload: any) => payload)
        );
    }
  );

}

