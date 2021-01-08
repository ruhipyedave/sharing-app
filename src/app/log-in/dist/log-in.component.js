"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LogInComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var auth_actions_1 = require("../store/actions/auth.actions");
var user_selectors_1 = require("../store/selectors/user.selectors");
var LogInComponent = /** @class */ (function () {
    function LogInComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.logInForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', forms_1.Validators.required]
        });
        this.submitted = false;
    }
    LogInComponent.prototype.ngOnInit = function () {
        // getLoggedInUser
        this.store.select(user_selectors_1.getLoggedInUser).subscribe(function (user) {
            if (user) {
                alert('SUCCESS!!');
            }
            alert('FAILED!!');
        });
    };
    Object.defineProperty(LogInComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.logInForm.controls; },
        enumerable: false,
        configurable: true
    });
    LogInComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.logInForm.invalid) {
            return;
        }
        this.store.dispatch(auth_actions_1.logIn(this.logInForm.value));
        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.logInForm.value, null, 4));
    };
    LogInComponent.prototype.onReset = function () {
        this.submitted = false;
        this.logInForm.reset();
    };
    LogInComponent = __decorate([
        core_1.Component({
            selector: 'app-log-in',
            templateUrl: './log-in.component.html',
            styleUrls: ['./log-in.component.scss']
        })
    ], LogInComponent);
    return LogInComponent;
}());
exports.LogInComponent = LogInComponent;
