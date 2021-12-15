"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('PropertyDecorators');
function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}
function WithTemplate(template, hookId) {
    return function (construtor) {
        console.log('Rendering Template');
        const hookEl = document.getElementById(hookId);
        const p = new construtor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Rizwan';
        console.log('Creating person object');
    }
};
Person = __decorate([
    Logger,
    WithTemplate('<h1></h1>', 'app')
], Person);
//# sourceMappingURL=index.js.map