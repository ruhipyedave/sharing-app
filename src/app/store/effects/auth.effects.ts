import { Injectable } from '@angular/core';
import { Actions, createEffect,  Effect, ofType } from '@ngrx/effects';
import { Router,  ActivatedRoute  } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import{ AuthActionTypes, logIn, logInSuccess, loginFailure, LogIn } from "../actions/auth.actions";
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private localSt: LocalStorageService,
  ) {}

  logIn$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActionTypes.LOGIN),
      map((action) => {debugger; return action}),
      switchMap((payload: User) => {
        debugger
        return this.authService.logIn(payload.email, payload.password).pipe(
          map(user => { debugger; return logInSuccess(user)}),
          catchError(error => {debugger; return of(loginFailure(error))})
        )
      })
    )
  );

  logInSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActionTypes.LOGIN_SUCESS),
      tap((res: User) => {debugger; console.log(res)
        // store token in local storage
        this.localSt.store('token', res.token);
        // go to landing page 
        this.router.navigate(['../books/list'], { relativeTo: this.route });
      })
    ), 
    { dispatch: false }
  );

  logInFailure$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActionTypes.LOGIN_FAILURE),
      tap((err) => {debugger; console.log(err)})
    ), 
    { dispatch: false }
  );

  logOut$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActionTypes.LOG_OUT),
      tap(() => {
        // clear local storage
        debugger;
        this.localSt.clear();
      })
    ), 
    { dispatch: false }
  );
}
