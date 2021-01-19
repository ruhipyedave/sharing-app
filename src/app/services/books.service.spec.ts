import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Book } from '../models/book';
import { ApiService } from './api.service';
import { BooksService } from './books.service';

const books: Book[] = [
  new Book("Let us C", "Learn programing in C.", [true]),
  new Book("The New New Thing", "A Silicon Valley Story by Michael Lewis (2001). This tale showed how all roads led to Jim Clark, the founder of Silicon Graphics, Netscape and Healtheon.", [true])
];

const book = new Book("Angular — The Complete Guide", "This course will help you to learn Angular (Angular 2+, incl. Angular 6) and build awesome, reactive web apps.", [true])

describe('BookService', () => {
  let bookService: BooksService;
  let apiService: ApiService;
  const httpClient = { 
    get: jest.fn(() => of(books)),
    post: jest.fn((url = "", body: Book, options = {}) => 
      of(new Book(body.title, body.description, body.tags))),
    put: jest.fn((url = "", body: Book, options = {}) => 
      of(new Book(body.title, body.description, body.tags))),
    delete: jest.fn((url = "", options = {}) => of()),
  };

  const provide = (mock: any): any => mock;
  beforeEach(() => {
    apiService = new ApiService(provide(httpClient));
    bookService = new BooksService(provide(apiService));
  });

  it('should be created', () => {
    expect(bookService).toBeTruthy();
  });

  it('get: Should return a array of Book definitions', () => {
    bookService.get("").subscribe((res: Book[]) => {
      expect(res.length).toBe(2);
    });
  });

  // it('get: Should return a array of Book definitions', () => {
  //   bookService.get("", {}).subscribe((res: Book[]) => {
  //     expect(res.length).toBe(2);
  //   });
  // });

  it('post: Should return an object of Book definitions', () => {
    bookService.post("", book).subscribe((res: Book) => {
      expect(res).toBeDefined();
      expect(res).toHaveProperty("id");
      expect(res.id).toBe(book.id);
      expect(res).toHaveProperty("title");
      expect(res.title.length).toBeGreaterThan(3);
      expect(res).toHaveProperty("description");
      expect(res.description.length).toBeGreaterThan(5);
      expect(res).toHaveProperty("tags");
      expect(res.tags.length).toBeGreaterThanOrEqual(1);
    });
  });

  
  it('put: Should return an object of Book definitions', () => {
    bookService.put(`${book.id}`, book).subscribe((res: Book) => {
      expect(res).toBeDefined();
      expect(res).toHaveProperty("id");
      expect(res.id).toBe(book.id);
      expect(res).toHaveProperty("title");
      expect(res.title.length).toBeGreaterThan(3);
      expect(res).toHaveProperty("description");
      expect(res.description.length).toBeGreaterThan(5);
      expect(res).toHaveProperty("tags");
      expect(res.tags.length).toBeGreaterThanOrEqual(1);
    });
  });
});
