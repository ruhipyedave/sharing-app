import { debug } from 'console';
import { Book } from '../models/book';
import { BookActionTypes, createBook, createBookFailure, createBookSuccess, deleteBook, deleteBookFailure, deleteBookSuccess, editBook, editBookFailure, getBook, getBookFailure, getBookSuccess, loadBooks, loadBooksFailure, loadBooksSuccess } from '../store/actions/books.actions';
import { reducer, initialState } from './books.reducer';

const books: Book[] = [
  new Book("Let us C", "Learn programing in C.", [true]),
  new Book("The New New Thing", "A Silicon Valley Story by Michael Lewis (2001). This tale showed how all roads led to Jim Clark, the founder of Silicon Graphics, Netscape and Healtheon.", [true])
];

const book = new Book("Angular — The Complete Guide", "This course will help you to learn Angular (Angular 2+, incl. Angular 6) and build awesome, reactive web apps.", [true])

describe('Books Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('Load books', () => {
    describe(BookActionTypes.LOAD_BOOKS, () => {
      it('should toggle loading state', () => {
        const action = loadBooks();
        const result = reducer(initialState, action);
        expect(result).toEqual({
          ...initialState,
        });
      });
    });
  });

  describe('Load books success', () => {
    describe(BookActionTypes.LOAD_BOOKS_SUCCESS, () => {
      it('should toggle loading state', () => {
        const action = loadBooksSuccess({ books });
        const result = reducer(initialState, action);
        expect(result).toEqual({
          ...initialState,
          books
        });
      });
    });
  });

  describe('Load books failure', () => {
    describe(BookActionTypes.LOAD_BOOKS_FAILURE, () => {
      it('should toggle loading state', () => {
        const action = loadBooksFailure({ error: "error occred" });
        const result = reducer(initialState, action);
        expect(result).toBeDefined;
        expect(result).toHaveProperty("error");
        expect(result.error).not.toBeNull();
      });
    });
  });

  describe('Create book', () => {
    describe(BookActionTypes.CREATE_BOOK, () => {
      it('should toggle loading state', () => {
        const action = createBook({data: book});
        const result = reducer(initialState, action);
        debugger;
        expect(result).toEqual(initialState);
      });
    });
  });

  describe('Create book success', () => {
    describe(BookActionTypes.CREATE_BOOK_SUCCESS, () => {
      it('should add book to state', () => {
        const action = createBookSuccess({ book });
        const result = reducer(initialState, action);
        expect(result).toEqual({
          ...initialState,
          book
        });
      });
    });
  });

  describe('Create book failure', () => {
    describe(BookActionTypes.CREATE_BOOK_FAILURE, () => {
      it('should assign error to state', () => {
        const action = createBookFailure({ error: "error occred" });
        const result = reducer(initialState, action);
        expect(result).toBeDefined;
        expect(result).toHaveProperty("error");
        expect(result.error).not.toBeNull();
      });
    });
  });

  describe('Get book', () => {
    describe(BookActionTypes.GET_BOOK, () => {
      it('should assign book to state', () => {
        const action = getBook({ id: book.id });
        const result = reducer(initialState, action);
        debugger;
        expect(result).toEqual(initialState);
      });
    });
  });

  describe('Get book success', () => {
    describe(BookActionTypes.GET_BOOK_SUCCESS, () => {
      it('should add book to state', () => {
        const action = getBookSuccess({ book });
        const result = reducer(initialState, action);
        expect(result).toEqual({
          ...initialState,
          book
        });
      });
    });
  });

  describe('Get book failure', () => {
    describe(BookActionTypes.GET_BOOK_FAILURE, () => {
      it('should assign error to state', () => {
        const action = getBookFailure({ error: "error occred" });
        const result = reducer(initialState, action);
        expect(result).toBeDefined;
        expect(result).toHaveProperty("error");
        expect(result.error).not.toBeNull();
      });
    });
  });

  describe('Edit book', () => {
    describe(BookActionTypes.EDIT_BOOK, () => {
      it('should toggle loading state', () => {
        const action = editBook({ id: book.id, body: {
          ...book, title: "Change name"
        }});
        const result = reducer(initialState, action);
        expect(result).toEqual(initialState);
      });
    });
  });

  describe('Edit book success', () => {
    describe(BookActionTypes.EDIT_BOOK_SUCCESS, () => {
      it('should add book to state', () => {
        const action = getBookSuccess({ book: {
          ...book, title: "Change name"
        } });
        const result = reducer(initialState, action);
        expect(result).toEqual({
          ...initialState,
          book: {
            ...book,
            title: "Change name"
          }
        });
      });
    });
  });

  describe('Edit book failure', () => {
    describe(BookActionTypes.EDIT_BOOK_FAILURE, () => {
      it('should assign error to state', () => {
        const action = editBookFailure({ error: "error occred" });
        const result = reducer(initialState, action);
        expect(result).toBeDefined;
        expect(result).toHaveProperty("error");
        expect(result.error).not.toBeNull();
      });
    });
  });

  
  describe('Delete book', () => {
    describe(BookActionTypes.DELETE_BOOK, () => {
      it('should toggle loading state', () => {
        const action = deleteBook({ id: book.id });
        const result = reducer(initialState, action);
        debugger;
        expect(result).toEqual(initialState);
      });
    });
  });

  describe('Delete book success', () => {
    describe(BookActionTypes.DELETE_BOOK_SUCCESS, () => {
      it('should add book to state', () => {
        const action = deleteBookSuccess({ book });
        const result = reducer(initialState, action);
        debugger;
        expect(result).toEqual({
          ...initialState,
          book: null
        });
      });
    });
  });

  describe('Delete book failure', () => {
    describe(BookActionTypes.EDIT_BOOK_FAILURE, () => {
      it('should assign error to state', () => {
        const action = deleteBookFailure({ error: "error occred" });
        const result = reducer(initialState, action);
        expect(result).toBeDefined;
        expect(result).toHaveProperty("error");
        expect(result.error).not.toBeNull();
      });
    });
  });

});
