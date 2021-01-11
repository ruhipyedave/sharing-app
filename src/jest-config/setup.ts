// src/jest-config/setup.ts
import 'jest-preset-angular';
import './globalMocks';

Object.defineProperty(document, 'doctype', {
    value: '<!DOCTYPE html>'
});
  
Object.defineProperty(document.body.style, 'transform', {
    value: () => {
      return {
        enumerable: true,
        configurable: true
      };
    }
});
    
Object.defineProperty(global, 'Promise', { writable: false, value: global.Promise });