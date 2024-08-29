
abstract class Employee {
    name: string;
    workLoad: number;
    salary: number;

    constructor(name: string, workLoad: number, salary: number) {
        this.name = name;
        this.workLoad = workLoad;
        this.salary = salary;
    }

    abstract work(): void;
    abstract calculateNetSalary(): number;
    abstract calculatesProfitSharing(lucro: number): number;
}

class EffectiveEmployee extends Employee {
    constructor(name: string, workLoad: number, salary: number) {
        super(name, workLoad, salary);
    }

    work(): void {
        console.log(`Im ${this.name} and I work ${this.workLoad} hours a week`);
    }

    calculateNetSalary(): number {
        const DISCOUNT_RATE = 0.2;
        const discount = this.salary * DISCOUNT_RATE;
        return this.salary - discount;
    }
    calculatesProfitSharing(lucro: number): number {
        return lucro * this.salary;
    }
}

class EmployeeVoluntario extends Employee {
    advisor: Employee;

    constructor(name: string, workLoadExtensao: number, funciarioEfetivo: Employee) {
        super(name, workLoadExtensao, null as unknown as number);
        this.advisor = funciarioEfetivo;
    }

    writeReport(): void {
        console.log(`Im ${this.name} and i write a report to my advisor ${this.advisor.name}`);
    }

    work(): void {
        console.log(`Im ${this.name} and I research ${this.workLoad} hours a week to complete my graduation`);
    }

    calculatesProfitSharing(lucro: number): number {
        throw new Error("Volunteer employee dont have profit sharing");
    }

    calculateNetSalary(): number {
        throw new Error("Volunteer employee dont have salary");
    }
}

const effectiveEmployee: Employee = new EffectiveEmployee("João", 40, 2400);
const volunteerWorker: Employee = new EmployeeVoluntario("Enzo", 20, effectiveEmployee);

//Efetivo
console.log("name:", effectiveEmployee.name);
console.log("gross salary:", effectiveEmployee.salary);
console.log("net salary:", effectiveEmployee.calculateNetSalary());
console.log("salary with profit sharing:", effectiveEmployee.calculatesProfitSharing(2.5), "\n");

//Voluntário
console.log("name:", volunteerWorker.name);
console.log("gross salary:", volunteerWorker.salary);
console.log("net salary:", volunteerWorker.calculateNetSalary());
console.log("salary with profit sharing:", volunteerWorker.calculatesProfitSharing(2.5)); 