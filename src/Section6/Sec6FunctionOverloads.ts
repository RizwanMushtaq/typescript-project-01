// console.log('Function Overloads')
// // Its a feature that allows us to define multiple function signatures
// // We have multiple different ways of calling a function

// type Combinable = string | number
// type Numeric = number | boolean

// type Universal = Combinable & Numeric

// function add(a:number, b:number): number
// function add(a:string, b:string): string
// function add(a:number, b:string): string
// function add(a:string, b:number): string
// function add(a:Combinable, b:Combinable) {
//     if(typeof a === 'string' || typeof b === 'string'){
//         return a.toString() + b.toString()
//     }
//     return a+b
// }

// const result = add('Rizwan', ' Mushtaq')
// result.split(' ')
