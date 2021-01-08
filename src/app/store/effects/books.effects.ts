import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { BookActionTypes, loadBooksSuccess, loadBooksFailure, getBookSuccess, loadBooks } from '../actions/books.actions';
import { Book } from '../../models/book';
import { tap, switchMap, catchError, map } from 'rxjs/operators';
import { BooksService } from 'src/app/services/books.service';
import { of } from 'rxjs';

@Injectable()
export class BooksEffects {

  constructor(
    private actions$: Actions,
    private bookService: BooksService,
    ) {}

  loadBooks$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.LOAD_BOOKS),
      map(action => {debugger; return action}),
      switchMap(
        () => {
          debugger;
          return this.bookService.get().pipe(
            map(books => {
              debugger; return loadBooksSuccess({books})
            }),
            catchError(error => of(loadBooksFailure(error)))
          )
        }
      )
    )
  )
  
  loadBooksSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.LOAD_BOOKS_SUCCESS),
      tap((books: Book) => {
      })
    ), 
    { dispatch: false }
  );

  logInFailure$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.LOAD_BOOKS_FAILURE),
      tap((err) => {debugger; console.log(err)})
    ), 
    { dispatch: false }
  );

  getBook$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.GET_BOOK),
      map(action => {debugger; return action}),
      switchMap(
        (action: any) => {
          debugger;
          const {id} = action;
          const subUrl = `/${id}`;
          return this.bookService.get(subUrl).pipe(
            map(book => {
              debugger; return getBookSuccess({book})
            }),
            catchError(error => of(loadBooksFailure(error)))
          )
        }
      )
    )
  )

  getBookSucess$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.GET_BOOK_SUCCESS),
      tap((book) => {debugger; console.log(book)})
    ), 
    { dispatch: false }
  );

  getBookFailure$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.GET_BOOK_FAILURE),
      tap((err) => {debugger; console.log(err)})
    ), 
    { dispatch: false }
  );

  createBook$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.CREATE_BOOK),
      map(action => {debugger; return action}),
      switchMap(
        (payload: Book) => {
          debugger;
          return this.bookService.post("", payload).pipe(
            map(book => {
              debugger; return loadBooks();
            }),
            catchError(error => of(loadBooksFailure(error)))
          )
        }
      )
    )
  )

  createBookSucess$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.CREATE_BOOK_SUCCESS),
      tap((book) => {debugger; console.log(book)})
    ), 
    { dispatch: false }
  );

  createBookFailure$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.CREATE_BOOK_FAILURE),
      tap((err) => {debugger; console.log(err)})
    ), 
    { dispatch: false }
  );

  editBook$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.EDIT_BOOK),
      map(action => {debugger; return action}),
      switchMap(
        (action: any) => {
          debugger;
          const {id, body} = action;
          return this.bookService.put(`/${id}`, body).pipe(
            map(book => {
              debugger; return loadBooks();
            }),
            catchError(error => of(loadBooksFailure(error)))
          )
        }
      )
    )
  )

  editBookSucess$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.EDIT_BOOK_SUCCESS),
      tap((book) => {debugger; console.log(book)})
    ), 
    { dispatch: false }
  );

  editBookFailure$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.EDIT_BOOK_FAILURE),
      tap((err) => {debugger; console.log(err)})
    ), 
    { dispatch: false }
  );

  deleteBook$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.DELETE_BOOK),
      map(action => {debugger; return action}),
      switchMap(
        (action: any) => {
          debugger;
          const {id, body} = action;
          return this.bookService.delete(`/${id}`, body).pipe(
            map(book => {
              debugger; return loadBooks();
            }),
            catchError(error => of(loadBooksFailure(error)))
          )
        }
      )
    )
  )

  deleteBookSucess$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.EDIT_BOOK_SUCCESS),
      tap((book) => {debugger; console.log(book)})
    ), 
    { dispatch: false }
  );

  deleteBookFailure$ = createEffect(
    () => this.actions$.pipe(
      ofType(BookActionTypes.EDIT_BOOK_FAILURE),
      tap((err) => {debugger; console.log(err)})
    ), 
    { dispatch: false }
  );


}
