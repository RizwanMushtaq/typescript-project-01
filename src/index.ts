console.log('Intersection Types')

type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string
    startDate: Date
}

type ElevatedEmployee = Admin & Employee

