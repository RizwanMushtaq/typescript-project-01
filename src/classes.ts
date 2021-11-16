class Department {
    private name: string
    private employees: string[] = []

    constructor(n: string) {
        this.name = n
    }

    describe(this: Department) {
        console.log('Department. ' + this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }

}

const tech = new Department('Tech')
tech.addEmployee('Rizwan')
tech.addEmployee('Max')

console.log(tech)
tech.describe()
tech.printEmployeeInformation()