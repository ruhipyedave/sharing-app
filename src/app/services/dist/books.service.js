"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BooksService = void 0;
var core_1 = require("@angular/core");
var BooksService = /** @class */ (function () {
    function BooksService(apiService) {
        this.apiService = apiService;
        this.url = "books";
    }
    BooksService.prototype.get = function (url) {
        if (url === void 0) { url = ""; }
        debugger;
        url = this.url + url;
        return this.apiService.get(url, {});
    };
    BooksService.prototype.post = function (url, body) {
        if (url === void 0) { url = ""; }
        debugger;
        url = this.url + url;
        return this.apiService.post(url, body, {});
    };
    BooksService.prototype.put = function (url, body) {
        if (url === void 0) { url = ""; }
        debugger;
        url = this.url + url;
        return this.apiService.put(url, body, {});
    };
    BooksService.prototype["delete"] = function (url, body) {
        if (url === void 0) { url = ""; }
        debugger;
        url = this.url + url;
        return this.apiService["delete"](url, {});
    };
    BooksService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BooksService);
    return BooksService;
}());
exports.BooksService = BooksService;
