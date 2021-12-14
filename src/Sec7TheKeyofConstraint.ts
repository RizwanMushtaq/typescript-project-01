// console.log('Sec7TheKeyofConstraint')

// //Creating your own Generic Types
// //you can create your own generic function and classes

// //Here we want to restrict the types of T and U and we can do it using Constraints

// //the Typeof Constraint

// function extractAndConvert<T extends object, U extends keyof T>(
//     obj: T, 
//     key: U
// ){
//     return 'value' + obj[key]
// }

// extractAndConvert({name: 'Rizwan'}, 'name')


