import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ListComponent } from './list.component';
import { initialState } from '../../reducers/books.reducer';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import Swal from 'sweetalert2'
import { FormsModule } from '@angular/forms';


let mockRouter = {
  navigate: jasmine.createSpy('navigate')
};

const localStorageMock = {
  retrieve: jest.fn(),
  clear: jest.fn(),
  observe: jest.fn((token: string) => of({token: "token"}))
};

enum DismissReason {
  cancel, backdrop, close, esc, timer
}

const sweetAlertMock = {
  fire: jest.fn(),
  DismissReason: DismissReason
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let store: MockStore;
  let localSt: LocalStorageService;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [
        provideMockStore({ initialState }),
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: {
          paramMap: of({ get: (key) => 'value' })}
        },
        { provide: LocalStorageService, useValue: localStorageMock },
        Swal
        // { provide: Swal, useValue: sweetAlertMock }
        // other providers
      ],
      imports:[
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    localSt = TestBed.inject(LocalStorageService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should create', () => {
    component.showEditForm(Date.now());
    expect(router.navigate).toBeCalled();
  });

  // it('should show delete confirm box', () => {
  //   let result = component.showDeleteConfirmBox(Date.now());
  //   expect(result).toBeDefined();
  // });
});
