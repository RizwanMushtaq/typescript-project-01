// console.log('Discriminated Unions')
// // It's a pattern by which using Type Guards makes easier
// // Type Guards using Discriminated Unions
// // We can use it with interfaces as well as classes and objects

// interface Bird {
//     type: 'bird'
//     flyingSpeed: number
// }

// interface Horse {
//     type: 'horse'
//     runningSpeed: number
// }

// type Animal = Bird | Horse

// function moveAnimal(animal: Animal){
//     // if('flyingSpeed' in animal){
//     //     console.log('Moving with Speed: ' + animal.flyingSpeed)
//     // }
//     // if('runningSpeed' in animal){
//     //     console.log('Moving with Speed: ' + animal.runningSpeed)
//     // }

//     let speed
//     switch(animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed
//             break
//         case 'horse':
//             speed = animal.runningSpeed
//             break
//     }
//     console.log('Moving at speed: ' + speed)
// }

// let a1: Animal
// a1 = {
//     type: 'horse',
//     runningSpeed: 45 
// }
// moveAnimal(a1)