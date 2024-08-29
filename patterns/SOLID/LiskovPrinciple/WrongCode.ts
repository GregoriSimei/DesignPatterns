
abstract class EmployeeWrong {
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

class EffectiveEmployeeWrong extends EmployeeWrong {
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

class VolunteerEmployeeWrong extends EmployeeWrong {
    advisor: EmployeeWrong;

    constructor(name: string, workLoadExtensao: number, funciarioEfetivo: EmployeeWrong) {
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

const effectiveEmployeeWrong: EmployeeWrong = new EffectiveEmployeeWrong("João", 40, 2400);
const volunteerEmployeeWrong: EmployeeWrong = new VolunteerEmployeeWrong("Enzo", 20, effectiveEmployeeWrong);

//Efetivo
console.log("name:", effectiveEmployeeWrong.name);
console.log("gross salary:", effectiveEmployeeWrong.salary);
console.log("net salary:", effectiveEmployeeWrong.calculateNetSalary());
console.log("salary with profit sharing:", effectiveEmployeeWrong.calculatesProfitSharing(2.5), "\n");

//Voluntário
console.log("name:", volunteerEmployeeWrong.name);
console.log("gross salary:", volunteerEmployeeWrong.salary);
console.log("net salary:", volunteerEmployeeWrong.calculateNetSalary());
console.log("salary with profit sharing:", volunteerEmployeeWrong.calculatesProfitSharing(2.5)); 