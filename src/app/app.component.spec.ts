import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppState } from "./store/app.states";
import { initialState as authInitialState } from './reducers/auth.reducer';
import { initialState as booksInitialState } from './reducers/books.reducer';
import { LocalStorageService } from 'ngx-webstorage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const localStorageMock = {
  retrieve: jest.fn(),
  clear: jest.fn(),
  observe: jest.fn((token: string) => of({token: "token"}))
};

const initialState: AppState = {
  auth: authInitialState,
  books: booksInitialState
};

describe('AppComponent', () => {
  let store: MockStore;
  let localSt: LocalStorageService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: LocalStorageService, useValue: localStorageMock }
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    // router = TestBed.inject(Router);
    // route = TestBed.inject(ActivatedRoute);
    localSt = TestBed.inject(LocalStorageService);
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

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent)
  //     .toContain('sharing-app app is running!');
  // });
});
