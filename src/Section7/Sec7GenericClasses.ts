// console.log('Sec7GenericClasses')

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


// //Generic Classes
// class DataStorage<T extends string | number | boolean> {
//     private data: T[] = []

//     addItem(item: T) {
//         this.data.push(item)
//     }

//     removeItem(item: T) {
//         if(this.data.indexOf(item) === -1) {
//             return
//         }
//         this.data.splice(this.data.indexOf(item), 1)
//     }

//     getItems() {
//         return [...this.data]
//     }
// }

// const textStorage = new DataStorage<string>()
// textStorage.addItem('Rizwan')
// textStorage.addItem('Max')
// textStorage.addItem('Max')
// textStorage.removeItem('Hello')
// console.log(textStorage.getItems())


// const numberStorage = new DataStorage<number>()
// numberStorage.addItem(5)
// numberStorage.addItem(8)
// numberStorage.addItem(4)
// numberStorage.removeItem(10)
// console.log(numberStorage.getItems())
