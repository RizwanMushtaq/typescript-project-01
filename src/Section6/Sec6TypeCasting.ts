// console.log('Type Casting')
// // It's helps you tell TS that some value is of specific type

// const userInput1 = <HTMLInputElement>document.querySelector("#userInput")!
// const userInput2 = document.querySelector("#userInput")! as HTMLInputElement
// userInput1.value = 'Hi there!'
// userInput2.value = 'Hello!'

// //If we are not sure that element exit in DOM or not
// const userInput3 = document.querySelector("#userInput")
// if(userInput3){
//     (userInput3 as HTMLInputElement).value = "3rd Element in TS"
// }