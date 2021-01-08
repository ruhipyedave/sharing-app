"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.reducer = exports.initialState = exports.authFeatureKey = void 0;
var store_1 = require("@ngrx/store");
var auth_actions_1 = require("../store/actions/auth.actions");
exports.authFeatureKey = 'auth';
exports.initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
};
exports.reducer = store_1.createReducer(exports.initialState, store_1.on(auth_actions_1.logIn, function (state, action) { return (__assign(__assign({}, state), { user: action.user })); }), store_1.on(auth_actions_1.logInSuccess, function (state, user) { return (__assign(__assign({}, state), { user: user, isAuthenticated: true })); }), store_1.on(auth_actions_1.loginFailure, function (state, user) { return (__assign(__assign({}, state), { user: user, isAuthenticated: false, errorMessage: "Log in failed" })); }));
// export function reducer(state: State | undefined, action: Action) {
//   return createReducer(
//     initialState,
//     on(AuthActionTypes.LOGIN, state => ({ ...state, }))
//   );
// }
// const scoreboardReducer = createReducer(
//   initialState,
//   on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
//   on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
//   on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
//   on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
// );
// export function reducer(state: State | undefined, action: Action) {
//   return scoreboardReducer(state, action);
// }
