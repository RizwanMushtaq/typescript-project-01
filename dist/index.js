"use strict";
console.log('Discriminated Unions');
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}
let a1;
a1 = {
    type: 'horse',
    runningSpeed: 45
};
moveAnimal(a1);
//# sourceMappingURL=index.js.map