"use strict";
console.log("In Index,js");
let user1;
user1 = {
    name: 'Rizwan',
    age: 25,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there - I am');
//# sourceMappingURL=index2.js.map