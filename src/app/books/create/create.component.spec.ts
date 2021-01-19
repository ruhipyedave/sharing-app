import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { initialState } from '../../reducers/books.reducer';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

const book = new Book("Angular — The Complete Guide", "This course will help you to learn Angular (Angular 2+, incl. Angular 6) and build awesome, reactive web apps.", [true, true, true]);
let mockRouter = {
  navigate: jasmine.createSpy('navigate')
};
describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let router: Router;
  let store: MockStore;
  let route: ActivatedRoute;
  let fb: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComponent ],
      providers: [
        provideMockStore({ initialState }),
        { provide: Router, useValue: mockRouter},
        { provide: ActivatedRoute, useValue: {
            params: of({ id: Date.now().toString() })
          }
        },
        FormBuilder
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
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    fb = TestBed.inject(FormBuilder);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(component.bookForm).toBeDefined();
    expect(component.bookForm.invalid).toBeTruthy();
  });

  // it('id field type validation', () => {
  //   const title = component.bookForm.controls.title;
  //   expect(title.valid).toBeFalsy();
  //   title.setValue('');
  //   expect(title.hasError('required')).toBeTruthy();
  // });

  it('title field type validation', () => {
    const title = component.bookForm.controls.title;
    expect(title.valid).toBeFalsy();
    title.setValue('');
    expect(title.hasError('required')).toBeTruthy();
  });
  
  it('description field validity', () => {
    const description = component.bookForm.controls.description;
    expect(description.valid).toBeFalsy();
    description.setValue('');
    expect(description.hasError('required')).toBeTruthy();
  });

  it('tags field validity', () => {
    const tags = component.bookForm.controls.tags;
    debugger;
    expect(tags.valid).toBeTruthy()
    // tags.setValue(['tech']);
    // expect(tags.hasError('required')).toBeTruthy();
  });
 
  it('Form invalid should be true when form is invalid', (() => {
    component.bookForm.controls.title.setValue('');
    component.bookForm.controls.description.setValue(' ');
    expect(component.bookForm.invalid).toBeTruthy();
  }));


  it('On form submit, create new book', (() => {
    component.bookForm.patchValue(book);
    debugger;
    expect(component.bookForm.valid).toBeTruthy();
  }))

  it('On cancel', (() => {
    component.onCancel();
    expect(router.navigate).toBeCalled();
  }))

  it('On Submit', (() => {
    component.onSubmit();
    debugger;
    // expect(store.dispatch).toBeCalled();
  }))
});
