import { Book } from "../../models/book";
import { initialState } from "../../reducers/books.reducer";
import { booksSelector, bookSelector} from "./books.selectors";

const books: Book[] = [
  new Book("Let us C", "Learn programing in C.", [true]),
  new Book("The New New Thing", "A Silicon Valley Story by Michael Lewis (2001). This tale showed how all roads led to Jim Clark, the founder of Silicon Graphics, Netscape and Healtheon.", [true])
];

const book = new Book("Angular — The Complete Guide", "This course will help you to learn Angular (Angular 2+, incl. Angular 6) and build awesome, reactive web apps.", [true])

const createBooksState = () => {
  return {
    ...initialState,
    books, book
  }
}

describe('Books Selectors', () => {
  it("should select the book list", () => {
    booksSelector.projector((result) => {
      expect(result.length).toEqual(2);      
    });
  });

  it("should select single book", () => {
    bookSelector.projector((result) => {
      expect(result).toBeDefined();
    });
  });
});
