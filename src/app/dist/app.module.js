"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var books_module_1 = require("./books/books.module");
var app_component_1 = require("./app.component");
var store_1 = require("@ngrx/store");
var reducers_1 = require("./reducers");
var store_devtools_1 = require("@ngrx/store-devtools");
var environment_1 = require("../environments/environment");
var effects_1 = require("@ngrx/effects");
var log_in_component_1 = require("./log-in/log-in.component");
var ngx_webstorage_1 = require("ngx-webstorage");
var effects_2 = require("./store/effects");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                log_in_component_1.LogInComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                store_1.StoreModule.forRoot(reducers_1.reducers, { metaReducers: reducers_1.metaReducers }),
                !environment_1.environment.production ? store_devtools_1.StoreDevtoolsModule.instrument() : [],
                // StoreModule.forRoot({}, {}),
                store_devtools_1.StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment_1.environment.production }),
                effects_1.EffectsModule.forRoot(effects_2.effects),
                ngx_webstorage_1.NgxWebstorageModule.forRoot(),
                books_module_1.BooksModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
