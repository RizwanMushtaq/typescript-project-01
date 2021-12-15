// console.log('Sec7WhatAreGenerics')
// //Array is generic type, you need to specifiy which type of data you want to store in array
// const names: Array<string> = []

// //Promise type is also generic type.
// const promise: Promise<string> = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         resolve('This is done!')
//     }, 2000)
// })

// promise.then( data => {
//     data.split(' ')
//     console.log(data)
// })