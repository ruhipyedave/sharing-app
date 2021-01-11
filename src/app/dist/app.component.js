"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var auth_actions_1 = require("./store/actions/auth.actions");
var AppComponent = /** @class */ (function () {
    function AppComponent(localSt, store) {
        var _this = this;
        this.localSt = localSt;
        this.store = store;
        this.title = 'sharing-app';
        this.themes = {
            "blue-theme": "Blue",
            "red-theme": "Red"
        };
        this.theme = 'blue-theme';
        this.isLoggedIn = false;
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
    }
    AppComponent.prototype.signOut = function () {
        this.store.dispatch(auth_actions_1.logOut());
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
