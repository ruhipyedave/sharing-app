import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Action, State } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import * as fromActions from './store/actions/auth.actions';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
  let store: MockStore;
  const initialState: any = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule, ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore(initialState),
        // other providers
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sharing-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sharing-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('sharing-app app is running!');
  });
});


// import { render } from '@testing-library/angular';
// import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';

// describe('AppComponent', () => {
//   it('should render the component', async () => {
//     const { getByText } = await render(AppComponent);
//     expect(getByText('sharing-app'));
//   });
// });