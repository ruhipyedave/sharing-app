import * as fromBooks from './books.actions';

describe('loadBooks', () => {
  it('should return loadBooks action', () => {
    expect(fromBooks.loadBooks.type).toBe(fromBooks.BookActionTypes.LOAD_BOOKS);
  });

  it('should return loadBooksSuccess action', () => {
    expect(fromBooks.loadBooksSuccess.type).toBe(fromBooks.BookActionTypes.LOAD_BOOKS_SUCCESS);
  });

  it('should return loadBooksFailure action', () => {
    expect(fromBooks.loadBooksFailure.type).toBe(fromBooks.BookActionTypes.LOAD_BOOKS_FAILURE);
  });

  it('should return createBook action', () => {
    expect(fromBooks.createBook.type).toBe(fromBooks.BookActionTypes.CREATE_BOOK);
  });

  it('should return createBookSuccess action', () => {
    expect(fromBooks.createBookSuccess.type).toBe(fromBooks.BookActionTypes.CREATE_BOOK_SUCCESS);
  });

  it('should return createBookFailure action', () => {
    expect(fromBooks.createBookFailure.type).toBe(fromBooks.BookActionTypes.CREATE_BOOK_FAILURE);
  });

  it('should return editBook action', () => {
    expect(fromBooks.editBook.type).toBe(fromBooks.BookActionTypes.EDIT_BOOK);
  });

  it('should return editBookSuccess action', () => {
    expect(fromBooks.editBookSuccess.type).toBe(fromBooks.BookActionTypes.EDIT_BOOK_SUCCESS);
  });

  it('should return createBookFailure action', () => {
    expect(fromBooks.editBookFailure.type).toBe(fromBooks.BookActionTypes.EDIT_BOOK_FAILURE);
  });

  it('should return getBook action', () => {
    expect(fromBooks.getBook.type).toBe(fromBooks.BookActionTypes.GET_BOOK);
  });

  it('should return getBookSuccess action', () => {
    expect(fromBooks.getBookSuccess.type).toBe(fromBooks.BookActionTypes.GET_BOOK_SUCCESS);
  });

  it('should return getBookFailure action', () => {
    expect(fromBooks.getBookFailure.type).toBe(fromBooks.BookActionTypes.GET_BOOK_FAILURE);
  });
  
  it('should return deleteBook action', () => {
    expect(fromBooks.deleteBook.type).toBe(fromBooks.BookActionTypes.DELETE_BOOK);
  });

  it('should return deleteBookSuccess action', () => {
    expect(fromBooks.deleteBookSuccess.type).toBe(fromBooks.BookActionTypes.DELETE_BOOK_SUCCESS);
  });

  it('should return deleteBookFailure action', () => {
    expect(fromBooks.deleteBookFailure.type).toBe(fromBooks.BookActionTypes.DELETE_BOOK_FAILURE);
  });
});
