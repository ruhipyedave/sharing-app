"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var constants_1 = require("../../constants");
var books_selectors_1 = require("../../store/selectors/books.selectors");
var books_actions_1 = require("../../store/actions/books.actions");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(fb, store, route, router) {
        var _this = this;
        this.fb = fb;
        this.store = store;
        this.route = route;
        this.router = router;
        this.allTags = constants_1.ALL_TAGS;
        this.mode = "Add";
        this.bookForm = this.fb.group({
            id: [],
            title: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            description: ['', forms_1.Validators.required],
            tags: new forms_1.FormArray([])
        });
        this.onSubmit = function () {
            debugger;
            // edit
            var id = _this.bookForm.value.id;
            if (id) {
                _this.store.dispatch(books_actions_1.editBook({ id: id, body: _this.bookForm.value }));
                _this.onCancel();
                return;
            }
            console.warn(_this.bookForm.value);
            _this.store.dispatch(books_actions_1.createBook(_this.bookForm.value));
            _this.onCancel();
        };
        this.onCancel = function () {
            debugger;
            if (_this.mode == "Add") {
                _this.router.navigate(['../list'], { relativeTo: _this.route });
                return;
            }
            _this.router.navigate(['../../list'], { relativeTo: _this.route });
        };
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allTags.forEach(function () { return _this.tags.push(new forms_1.FormControl()); });
        this.route.params.subscribe(function (param) {
            // get book by id
            debugger;
            var id = Number(param.id);
            if (!isNaN(id)) {
                _this.store.dispatch(books_actions_1.getBook({ id: id }));
            }
        });
        // this.bookForm.patchValue({});
        this.store.select(books_selectors_1.bookSelector).subscribe(function (book) {
            debugger;
            if (book) {
                _this.mode = "Edit";
                _this.bookForm.patchValue(book);
            }
        });
    };
    Object.defineProperty(CreateComponent.prototype, "id", {
        get: function () { return this.bookForm.get('id'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateComponent.prototype, "title", {
        get: function () { return this.bookForm.get('title'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateComponent.prototype, "description", {
        get: function () { return this.bookForm.get('description'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateComponent.prototype, "tags", {
        get: function () { return this.bookForm.get('tags'); },
        enumerable: false,
        configurable: true
    });
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'app-create',
            templateUrl: './create.component.html',
            styleUrls: ['./create.component.scss']
        })
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
