// console.log('Sec8PropertyDecoratorsAndOthers')

// //--- other places where we can add decorators - before property name
// //... decorators before Accessor, method and parameter

// function Log(target: any, propertyName: string | symbol) {
//     console.log('Property decorator!')
//     console.log(target, propertyName)
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//     console.log('Accessor decorator!')
//     console.log(target)
//     console.log(name)
//     console.log(descriptor)
// }

// function Log3(target: any, name: string | symbol, descriptor: PropertyDescriptor) {
//     console.log('Method decorator!')
//     console.log(target)
//     console.log(name)
//     console.log(descriptor)
// }

// function Log4(target: any, name: string | symbol, position: number) {
//     console.log('Parameter decorator!')
//     console.log(target)
//     console.log(name)
//     console.log(position)
// }

// class Product {
//     @Log
//     title: string
//     private _price: number

//     @Log2
//     set price(val: number) {
//         if(val > 0) {
//             this._price = val
//         } else {
//             throw new Error('Invalid price - should be positive!')
//         }
        
//     }

//     constructor(t: string, p: number) {
//         this.title = t
//         this._price = p
//     }

//     @Log3
//     getPriceWithTax(@Log4 tax: number){
//         return this._price * (1+tax)
//     }
// }


// //When do decorators Execute?
// //Decorator is just a function which executes when class is defined
// //We can also use and setup decorators at different times as well