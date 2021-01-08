"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var auth_actions_1 = require("../actions/auth.actions");
var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, authService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.logIn$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(auth_actions_1.AuthActionTypes.LOGIN), operators_1.map(function (action) { debugger; return action; }), operators_1.switchMap(function (payload) {
            debugger;
            return _this.authService.logIn(payload.email, payload.password).pipe(operators_1.map(function (user) { return auth_actions_1.logInSuccess(user); }), operators_1.catchError(function (error) { return rxjs_1.of(auth_actions_1.loginFailure(error)); }));
        })); });
    }
    AuthEffects = __decorate([
        core_1.Injectable()
    ], AuthEffects);
    return AuthEffects;
}());
exports.AuthEffects = AuthEffects;
