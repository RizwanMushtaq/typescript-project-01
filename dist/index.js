"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department. ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const tech = new Department('Tech');
tech.addEmployee('Rizwan');
tech.addEmployee('Max');
console.log(tech);
tech.describe();
tech.printEmployeeInformation();
//# sourceMappingURL=index.js.map