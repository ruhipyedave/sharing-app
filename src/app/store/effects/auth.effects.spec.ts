import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

import { Actions } from "@ngrx/effects";
// import { empty, Observable } from "rxjs";
import { User } from "src/app/models/user";
import { AuthActionTypes, logIn, logInSuccess } from "../actions/auth.actions";
import { AuthEffects } from './auth.effects';
import { Action } from '@ngrx/store';
import { empty } from 'rxjs';
const provide = (mock: any): any => mock;
import { RouterTestingModule } from '@angular/router/testing';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

let mockRouter = {
  navigate: jasmine.createSpy('navigate')
};

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  store: jest.fn(),
  clear: jest.fn()
};
// global.localStorage = localStorageMock;
describe('AuthEffects', () => {
  let actions$: Actions;
  let authEffects: AuthEffects;
  let authService: AuthService;
  let router: Router;
  let route: ActivatedRoute;
  let localSt: LocalStorageService;
  let actions: TestActions;


  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        {
          provide: Actions,
          useFactory: getActions
        },
        {
          provide: AuthService,
          useValue: {
            login: jest.fn(),
          }
        },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: {
          paramMap: of({ get: (key) => 'value' })}
        },
        { provide: LocalStorageService, useValue: localStorageMock }
      ]
    });

    actions = TestBed.get(Actions);
    authService = TestBed.get(AuthService);
    router = TestBed.get(Router);
    route = TestBed.get(ActivatedRoute);
    localSt = TestBed.get(LocalStorageService);
    authEffects = TestBed.get(AuthEffects);
  });

  it('should be created', () => {
    expect(authEffects).toBeTruthy();
  });

  it('logIn$: should return an logInSuccess action, with the user, on success', () => {
    authEffects.logIn$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(AuthActionTypes.LOGIN_SUCESS)
    });
  });

  it('logInSuccess$: should return an logInSuccess action, with the user, on success', () => {
    authEffects.logInSuccess$.subscribe(action => {
      expect(action).toBeDefined();
      // expect(action).toHaveProperty("type");
      // expect(action.type).toBe(AuthActionTypes.LOGIN_SUCESS)
    });
  });

  it('logInFailure$: should return an logInFailure action, with en error, on failure', () => {
    authEffects.logInFailure$.subscribe(action => {
      expect(action).toBeDefined();
      // expect(action).toHaveProperty("type");
      // expect(action.type).toBe(AuthActionTypes.LOGIN_FAILURE)
    });
  });

  it('logOut$: should clear local storage', () => {
    let result = authEffects.logOut$.subscribe(action => {
      expect(action).toBeDefined();
      // expect(action).toHaveProperty("type");
    });
  });

});