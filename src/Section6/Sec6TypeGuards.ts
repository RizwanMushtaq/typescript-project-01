// console.log('Type Guards')
// // It is an idea to check if certain property or method exits before you try to use it


// type Admin = {
//     name: string;
//     privileges: string[]
// }

// type Employee = {
//     name: string
//     startDate: Date
// }

// type ElevatedEmployee = Admin & Employee

// const e1: ElevatedEmployee = {
//     name: 'Rizwan',
//     privileges: ['create-server'],
//     startDate: new Date()
// }

// type Combinable = string | number
// type Numeric = number | boolean

// type Universal = Combinable & Numeric

// //Type guard using "typeof"
// function add (a: Combinable, b: Combinable){
//     // this is type guard using typeof
//     if(typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString()
//     }
//     return a+b
// }

// //Another way to create Type Guards using "in"
// type UnknownEmploy = Employee | Admin
// function printEmployeeInformation(emp: UnknownEmploy) {
//     console.log('Name: ' + emp.name)
//     if('privileges' in emp){
//         console.log('Privileges: ' + emp.privileges)
//     }
//     if('startDate' in emp){
//         console.log('Startdate: ' + emp.startDate)
//     }
// }
// printEmployeeInformation(e1)

// //Another way to create type Guard using "instanceOf"
// class Car {
//     drive(){
//         console.log('Driving...')
//     }
// }
// class Truck {
//     drive(){
//         console.log('Driving a Truck...')
//     }

//     loadCargo(amount: number){
//         console.log('Loading Cargo ...' + amount)
//     }
// }

// type Vehicle = Car | Truck

// const v1 = new Car()
// const v2 = new Truck()

// function useVehicle(vehicle: Vehicle){
//     vehicle.drive()
//     if(vehicle instanceof Truck){
//         vehicle.loadCargo(1000)
//     }
// }

// useVehicle(v2)





