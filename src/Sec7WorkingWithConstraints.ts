// console.log('Sec7WorkingWithConstraints')

// //Creating your own Generic Types
// //you can create your own generic function and classes

// //Here we want to restrict the types of T and U and we can do it using Constraints


// function merge<T extends object, U extends object>(objA: T, objB: U){
//     return Object.assign(objA, objB)
// }

// const mergeObj = merge({name:'Riz'}, {age: 25})
// console.log(mergeObj)


// //Another Generic Function Example
// interface Lengthy {
//     length: number
// }
// //Its generic function where we handle all types of data which have length property such string or array
// function CountAndDescribe<T extends Lengthy>(element: T): [T, string] {
//     let descriptionText = 'Got no value'
//     if(element.length === 1){
//         descriptionText = 'Got 1 element'
//     }
//     if(element.length > 1){
//         descriptionText = 'Got ' + element.length + ' elements.'
//     }
//     return [element, descriptionText]
// }
// console.log(CountAndDescribe('Hello'))
