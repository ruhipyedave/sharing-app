"use strict";
exports.__esModule = true;
// src/jest-config/setup.ts
require("jest-preset-angular");
require("./globalMocks");
// Object.defineProperty(document, 'doctype', {
//     value: '<!DOCTYPE html>'
// });
// Object.defineProperty(document.body.style, 'transform', {
//     value: () => {
//       return {
//         enumerable: true,
//         configurable: true
//       };
//     }
// });
Object.defineProperty(global, 'Promise', { writable: false, value: global.Promise });
