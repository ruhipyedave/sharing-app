"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BooksEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var books_actions_1 = require("../actions/books.actions");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var BooksEffects = /** @class */ (function () {
    function BooksEffects(actions$, bookService) {
        var _this = this;
        this.actions$ = actions$;
        this.bookService = bookService;
        this.loadBooks$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.LOAD_BOOKS), operators_1.map(function (action) { debugger; return action; }), operators_1.switchMap(function () {
            debugger;
            return _this.bookService.get().pipe(operators_1.map(function (books) {
                debugger;
                return books_actions_1.loadBooksSuccess({ books: books });
            }), operators_1.catchError(function (error) { return rxjs_1.of(books_actions_1.loadBooksFailure(error)); }));
        })); });
        this.loadBooksSuccess$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.LOAD_BOOKS_SUCCESS), operators_1.tap(function (books) {
        })); }, { dispatch: false });
        this.logInFailure$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.LOAD_BOOKS_FAILURE), operators_1.tap(function (err) { debugger; console.log(err); })); }, { dispatch: false });
        this.getBook$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.GET_BOOK), operators_1.map(function (action) { debugger; return action; }), operators_1.switchMap(function (action) {
            debugger;
            var id = action.id;
            var subUrl = "/" + id;
            return _this.bookService.get(subUrl).pipe(operators_1.map(function (book) {
                debugger;
                return books_actions_1.getBookSuccess({ book: book });
            }), operators_1.catchError(function (error) { return rxjs_1.of(books_actions_1.loadBooksFailure(error)); }));
        })); });
        this.getBookSucess$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.GET_BOOK_SUCCESS), operators_1.tap(function (book) { debugger; console.log(book); })); }, { dispatch: false });
        this.getBookFailure$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.GET_BOOK_FAILURE), operators_1.tap(function (err) { debugger; console.log(err); })); }, { dispatch: false });
        this.createBook$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.CREATE_BOOK), operators_1.map(function (action) { debugger; return action; }), operators_1.switchMap(function (payload) {
            debugger;
            return _this.bookService.post("", payload).pipe(operators_1.map(function (book) {
                debugger;
                return books_actions_1.loadBooks();
            }), operators_1.catchError(function (error) { return rxjs_1.of(books_actions_1.loadBooksFailure(error)); }));
        })); });
        this.createBookSucess$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.CREATE_BOOK_SUCCESS), operators_1.tap(function (book) { debugger; console.log(book); })); }, { dispatch: false });
        this.createBookFailure$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.CREATE_BOOK_FAILURE), operators_1.tap(function (err) { debugger; console.log(err); })); }, { dispatch: false });
        this.editBook$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.EDIT_BOOK), operators_1.map(function (action) { debugger; return action; }), operators_1.switchMap(function (action) {
            debugger;
            var id = action.id, body = action.body;
            return _this.bookService.put("/" + id, body).pipe(operators_1.map(function (book) {
                debugger;
                return books_actions_1.loadBooks();
            }), operators_1.catchError(function (error) { return rxjs_1.of(books_actions_1.loadBooksFailure(error)); }));
        })); });
        this.editBookSucess$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.EDIT_BOOK_SUCCESS), operators_1.tap(function (book) { debugger; console.log(book); })); }, { dispatch: false });
        this.editBookFailure$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.EDIT_BOOK_FAILURE), operators_1.tap(function (err) { debugger; console.log(err); })); }, { dispatch: false });
        this.deleteBook$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.DELETE_BOOK), operators_1.map(function (action) { debugger; return action; }), operators_1.switchMap(function (action) {
            debugger;
            var id = action.id, body = action.body;
            return _this.bookService["delete"]("/" + id, body).pipe(operators_1.map(function (book) {
                debugger;
                return books_actions_1.loadBooks();
            }), operators_1.catchError(function (error) { return rxjs_1.of(books_actions_1.loadBooksFailure(error)); }));
        })); });
        this.deleteBookSucess$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.EDIT_BOOK_SUCCESS), operators_1.tap(function (book) { debugger; console.log(book); })); }, { dispatch: false });
        this.deleteBookFailure$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(books_actions_1.BookActionTypes.EDIT_BOOK_FAILURE), operators_1.tap(function (err) { debugger; console.log(err); })); }, { dispatch: false });
    }
    BooksEffects = __decorate([
        core_1.Injectable()
    ], BooksEffects);
    return BooksEffects;
}());
exports.BooksEffects = BooksEffects;
