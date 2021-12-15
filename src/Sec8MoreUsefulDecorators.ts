// console.log('Sec8MoreUsefulDecorators')

// //Decorators help to write a code which is easily used by other coders
// //Decorators does not have direct impact on end users of website
// //In TS config file set "target": "es6", and "experimentalDecorators": true,

// //Decorators are mostly about classes
// //Decorator is just a function
// //Decorators gets executes when a class is defined

// //Decorator Factories - It give us more power 
// //We can add a custom string to our decorator function

// //Angular Uses decorators in a framwork but in more advanced form

// function Logger(constructor: Function) {
//     console.log('Logging...')
//     console.log(constructor)
// }

// function WithTemplate(template: string, hookId: string) {
//     return function(construtor: any) {
//         console.log('Rendering Template')
//         const hookEl = document.getElementById(hookId)
//         const p = new construtor()
//         if(hookEl) {
//             hookEl.innerHTML = template
//             hookEl.querySelector('h1')!.textContent = p.name
//         }
//     }
// }

// @Logger
// @WithTemplate('<h1></h1>', 'app')
// class Person {
//     name = 'Rizwan'

//     constructor(){
//         console.log('Creating person object')
//     }
// }

// // const pers = new Person()
// // console.log(pers)