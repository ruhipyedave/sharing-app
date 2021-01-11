"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var testing_3 = require("@ngrx/store/testing");
describe('AppComponent', function () {
    var store;
    var initialState = {
        isAuthenticated: false,
        user: null,
        errorMessage: null
    };
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                testing_2.RouterTestingModule, forms_1.FormsModule, forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                testing_3.provideMockStore(initialState),
            ]
        }).compileComponents();
        store = testing_1.TestBed.inject(testing_3.MockStore);
    }));
    it('should create the app', function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    it("should have as title 'sharing-app'", function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.componentInstance;
        expect(app.title).toEqual('sharing-app');
    });
    it('should render title', function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        var compiled = fixture.nativeElement;
        expect(compiled.querySelector('.content span').textContent).toContain('sharing-app app is running!');
    });
});
// import { render } from '@testing-library/angular';
// import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
// describe('AppComponent', () => {
//   it('should render the component', async () => {
//     const { getByText } = await render(AppComponent);
//     expect(getByText('sharing-app'));
//   });
// });
