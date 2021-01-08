"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiService = void 0;
var core_1 = require("@angular/core");
var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.url = "http://localhost:3000/";
    }
    ApiService.prototype.get = function (url, options) {
        url = this.url + url;
        debugger;
        return this.httpClient.get(url, options);
    };
    ApiService.prototype.post = function (url, body, options) {
        url = this.url + url;
        debugger;
        return this.httpClient.post(url, body, options);
    };
    ApiService.prototype.put = function (url, body, options) {
        url = this.url + url;
        debugger;
        return this.httpClient.put(url, body, options);
    };
    ApiService.prototype["delete"] = function (url, options) {
        url = this.url + url;
        debugger;
        return this.httpClient["delete"](url, options);
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
