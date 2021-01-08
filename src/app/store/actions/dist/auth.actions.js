"use strict";
exports.__esModule = true;
exports.loginFailure = exports.logInSuccess = exports.logIn = exports.LogIn = exports.AuthActionTypes = exports.loadAuthsFailure = exports.loadAuthsSuccess = exports.loadAuths = void 0;
var store_1 = require("@ngrx/store");
exports.loadAuths = store_1.createAction('[Auth] Load Auths');
exports.loadAuthsSuccess = store_1.createAction('[Auth] Load Auths Success', store_1.props());
exports.loadAuthsFailure = store_1.createAction('[Auth] Load Auths Failure', store_1.props());
// export const LOGIN = createAction(
//   '[Auth] Log in',
//   (response: Response) => response
// );
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["LOGIN"] = "[Auth] Log in";
    AuthActionTypes["LOGIN_SUCESS"] = "[Auth] Log in sucess";
    AuthActionTypes["LOGIN_FAILURE"] = "[Auth] Log in failure";
})(AuthActionTypes = exports.AuthActionTypes || (exports.AuthActionTypes = {}));
// export const LOGIN = createAction('[Auth] Log in');
var LogIn = /** @class */ (function () {
    function LogIn(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN;
    }
    return LogIn;
}());
exports.LogIn = LogIn;
exports.logIn = store_1.createAction(AuthActionTypes.LOGIN, store_1.props()
// (response: Response) => {debugger; return response}
);
exports.logInSuccess = store_1.createAction(AuthActionTypes.LOGIN_SUCESS, store_1.props());
exports.loginFailure = store_1.createAction(AuthActionTypes.LOGIN_FAILURE, store_1.props());
