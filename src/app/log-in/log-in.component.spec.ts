import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LogInComponent } from './log-in.component';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
  let store: MockStore;
  const initialState = { 
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInComponent ],
      providers: [
        provideMockStore({ initialState }),
        // other providers
      ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(component.logInForm).toBeDefined();
    expect(component.logInForm.invalid).toBeTruthy();
  });

  it('email field type validation', () => {
    const email = component.logInForm.controls.email;
    expect(email.valid).toBeFalsy();
    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();
 
  });
  
  it('password field validity', () => {
    const password = component.logInForm.controls.password;
    expect(password.valid).toBeFalsy();
    password.setValue('');
    expect(password.hasError('required')).toBeTruthy();
  });
 
  it('Form invalid should be true when form is invalid', (() => {
    component.logInForm.controls.email.setValue('');
    component.logInForm.controls.password.setValue(' ');
    expect(component.logInForm.invalid).toBeTruthy();
  }));
 
});
