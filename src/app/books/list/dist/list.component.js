"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListComponent = void 0;
var core_1 = require("@angular/core");
var books_actions_1 = require("../../store/actions/books.actions");
var books_selectors_1 = require("../../store/selectors/books.selectors");
var sweetalert2_1 = require("sweetalert2");
var ListComponent = /** @class */ (function () {
    function ListComponent(localSt, store, router, route) {
        var _this = this;
        this.localSt = localSt;
        this.store = store;
        this.router = router;
        this.route = route;
        this.isLoggedIn = false;
        this.books = [];
        this.showDeleteConfirmBox = function (id) {
            sweetalert2_1["default"].fire({
                title: 'Are you sure you want to delete this Book?',
                text: 'You will not be able to recover this Book!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it'
            }).then(function (result) {
                if (result.value) {
                    // Swal.fire(
                    //   'Deleted!',
                    //   'Book has been deleted.',
                    //   'success'
                    // )
                    _this.store.dispatch(books_actions_1.deleteBook({ id: id }));
                    // For more information about handling dismissals please visit
                    // https://sweetalert2.github.io/#handling-dismissals
                }
                else if (result.dismiss === sweetalert2_1["default"].DismissReason.cancel) {
                    sweetalert2_1["default"].fire('Cancelled', 'Book is safe :)', 'error');
                }
            });
        };
        this.showEditForm = function (id) {
            debugger;
            _this.router.navigate(['../edit', id], { relativeTo: _this.route });
        };
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // dispatch action to get list of 
        this.isLoggedIn = this.localSt.retrieve("token") ? true : false;
        this.localSt.observe('token')
            .subscribe(function (token) {
            debugger;
            if (token) {
                return _this.isLoggedIn = true;
            }
            _this.isLoggedIn = false;
        });
        this.store.dispatch(books_actions_1.loadBooks());
        this.store.select(books_selectors_1.booksSelector).subscribe(function (books) {
            debugger;
            _this.books = books;
        });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.scss']
        })
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
