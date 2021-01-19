import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';
import { ApiService } from 'src/app/services/api.service';
import { BooksService } from 'src/app/services/books.service';
import { BooksEffects } from './books.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { BookActionTypes } from '../actions/books.actions';
// by creating an Observable
let actions$ = new Observable<Action>();

// mock the service to prevent an HTTP request
// customersServiceSpy.getAllCustomers.and.returnValue(of([...]));
const provide = (mock: any): any => mock;

const books: Book[] = [
  new Book("Let us C", "Learn programing in C.", [true]),
  new Book("The New New Thing", "A Silicon Valley Story by Michael Lewis (2001). This tale showed how all roads led to Jim Clark, the founder of Silicon Graphics, Netscape and Healtheon.", [true])
];

const book = new Book("Angular — The Complete Guide", "This course will help you to learn Angular (Angular 2+, incl. Angular 6) and build awesome, reactive web apps.", [true])

const httpClient = { 
  get: jest.fn(() => of(books)),
  post: jest.fn((url = "", body: Book, options = {}) => 
    of(new Book(body.title, body.description, body.tags))),
  put: jest.fn((url = "", body: Book, options = {}) => 
    of(new Book(body.title, body.description, body.tags))),
  delete: jest.fn((url = "", options = {}) => of()),
};

describe('BooksEffects', () => {
  actions$ = of({ type: 'Action One' });
  let booksEffects: BooksEffects;

  beforeEach(() => {

    let apiService = new ApiService(provide(httpClient));
    let bookService = new BooksService(provide(apiService));
    booksEffects = new BooksEffects(actions$, provide(bookService))
    // TestBed.configureTestingModule({
    //   providers: [
    //     BooksEffects,
    //     provideMockActions(() => actions$)        
    //   ]
    // });

    // effects = TestBed.inject(BooksEffects);
  });

  it('should be created', () => {
    expect(booksEffects).toBeTruthy();
  });

  it('loadBooks$: should return an loadBooksSuccess action, with the books, on success', () => {
    let result = booksEffects.loadBooks$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(BookActionTypes.LOAD_BOOKS_SUCCESS)
    });
  });
  
  it('loadBooksSuccess$: should return an loadBooksSuccess action, with the books, on success', () => {
    let result = booksEffects.loadBooksSuccess$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(BookActionTypes.LOAD_BOOKS_SUCCESS)
    });
  });

  
  it('loadBooksFailure$: should return an loadBooksFailure action, with an error, on failure', 
    () => {
      let result = booksEffects.loadBooksFailure$.subscribe(action => {
        expect(action).toBeDefined();
        expect(action).toHaveProperty("type");
        expect(action.type).toBe(BookActionTypes.LOAD_BOOKS_FAILURE)
    });
  });
  
  it('getBook$: should return an getBookSuccess action, with the book, on success', () => {
    let result = booksEffects.getBook$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(BookActionTypes.GET_BOOK_SUCCESS)
    });
  });

  it('getBookSucess$: should return an getBookSuccess action, with the book, on success', () => {
    let result = booksEffects.getBookSucess$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(BookActionTypes.GET_BOOK_SUCCESS)
    });
  });

  it('getBookFailure$: should return an getBookSuccess action, with the book, on success', () => {
    let result = booksEffects.getBookFailure$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(BookActionTypes.GET_BOOK_FAILURE)
    });
  });

  it('createBook$: should return an createBookSuccess action, with the book, on success', () => {
    let result = booksEffects.createBook$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(BookActionTypes.CREATE_BOOK_SUCCESS)
    });
  });

  it('createBookSucess$: should return an createBookSuccess action, with the book, on success', () => {
    let result = booksEffects.createBookSucess$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(BookActionTypes.CREATE_BOOK_SUCCESS)
    });
  });

  it('createBookFailure$: should return an createBookFailure action, with an error, on success', () => {
    let result = booksEffects.createBookFailure$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(BookActionTypes.CREATE_BOOK_FAILURE)
    });
  });

  it('editBook$: should return an editBookSuccess action, with the book, on success', () => {
    let result = booksEffects.editBook$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(BookActionTypes.EDIT_BOOK_SUCCESS)
    });
  });

  it('editBookSucess$: should return an editBookSuccess action, with the book, on success', () => {
    let result = booksEffects.editBookSucess$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(BookActionTypes.EDIT_BOOK_SUCCESS)
    });
  });

  it('editBookFailure$: should return an editBookFailure action, with an error, on success', () => {
    let result = booksEffects.editBookFailure$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(BookActionTypes.EDIT_BOOK_FAILURE)
    });
  });
  
  it('deleteBook$: should return an deleteBookSucess action, with the book, on success', () => {
    let result = booksEffects.deleteBook$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(BookActionTypes.DELETE_BOOK_SUCCESS)
    });
  });

  it('deleteBookSucess$: should return an deleteBookSucess action, with the book, on success', () => {
    let result = booksEffects.deleteBookSucess$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(BookActionTypes.DELETE_BOOK_SUCCESS)
    });
  });

  it('deleteBookFailure$: should return an deleteBookFailure action, with an error, on success', () => {
    let result = booksEffects.deleteBookFailure$.subscribe(action => {
      expect(action).toBeDefined();
      expect(action).toHaveProperty("type");
      expect(action.type).toBe(BookActionTypes.DELETE_BOOK_FAILURE)
    });
  });
  
});
