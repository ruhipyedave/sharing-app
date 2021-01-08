import * as auth from '../reducers/auth.reducer';
import * as book from '../reducers/books.reducer';


export interface AppState {
  [auth.authFeatureKey]: auth.State;
  [book.booksFeatureKey]: book.State;

}