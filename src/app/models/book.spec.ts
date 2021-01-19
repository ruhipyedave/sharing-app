import { Book } from './book';

describe('Book', () => {
  it('should create an instance', () => {
    let book = new Book("title", "Book description", [true]);
    expect(book).toBeTruthy();
  });
});
