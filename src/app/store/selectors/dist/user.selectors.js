"use strict";
exports.__esModule = true;
exports.getLoggedInUser = exports.getAuthState = void 0;
var store_1 = require("@ngrx/store");
exports.getAuthState = store_1.createFeatureSelector('authState');
exports.getLoggedInUser = store_1.createSelector(exports.getAuthState, function (state) { debugger; state.user; });
