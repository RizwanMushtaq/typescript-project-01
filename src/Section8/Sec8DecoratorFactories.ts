// console.log('Sec8DecoratorFactories')

// //Decorators help to write a code which is easily used by other coders
// //Decorators does not have direct impact on end users of website
// //In TS config file set "target": "es6", and "experimentalDecorators": true,

// //Decorators are mostly about classes
// //Decorator is just a function
// //Decorators gets executes when a class is defined

// //Decorator Factories - It give us more power 
// //We can add a custom string to our decorator function

// function Logger(logString: string) {
//     return function(constructor: Function) {
//         console.log(logString)
//         console.log(constructor)
//     }
// }


// @Logger('LOGGING - PERSON')
// class Person {
//     name = 'Rizwan'

//     constructor(){
//         console.log('Creating person object')
//     }
// }

// const pers = new Person()
// console.log(pers)


