"use strict";
// // This file is required by karma.conf.js and loads recursively all the .spec and framework files
exports.__esModule = true;
// import 'zone.js/dist/zone-testing';
// import { getTestBed } from '@angular/core/testing';
// import {
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting
// } from '@angular/platform-browser-dynamic/testing';
// declare const require: {
//   context(path: string, deep?: boolean, filter?: RegExp): {
//     keys(): string[];
//     <T>(id: string): T;
//   };
// };
// // First, initialize the Angular testing environment.
// getTestBed().initTestEnvironment(
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting()
// );
// // Then we find all the tests.
// const context = require.context('./', true, /\.spec\.ts$/);
// // And load the modules.
// context.keys().map(context);
require("jest-preset-angular");
Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'getComputedStyle', {
    value: function () {
        return {
            display: 'none',
            appearance: ['-webkit-appearance']
        };
    }
});
Object.defineProperty(document, 'doctype', {
    value: '<!DOCTYPE html>'
});
Object.defineProperty(document.body.style, 'transform', {
    value: function () {
        return {
            enumerable: true,
            configurable: true
        };
    }
});
