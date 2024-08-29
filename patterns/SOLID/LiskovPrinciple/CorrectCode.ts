interface IEmployee {
    name: string
    workLoad: number
    work(): void
}

interface IEffectiveEmployee extends IEmployee {
    salary: number
    calculateNetSalary(): number
    calculatesProfitSharing(lucro: number): number
}

interface IVolunteerEmploye extends IEmployee {
    advisor: IEmployee
}

interface IResearcherEmployee extends IVolunteerEmploye {
    writeReport(): void
}

class EffectiveEmployee implements IEffectiveEmployee {
    name: string
    salary: number
    workLoad: number

    constructor(name: string, workLoad: number, salary: number) {
        this.name = name
        this.salary = salary
        this.workLoad = workLoad
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

class EmployeeVolunteer implements IVolunteerEmploye {
    name: string
    advisor: IEmployee;
    workLoad: number

    constructor(name: string, workLoad: number, funciarioEfetivo: IEmployee) {
        this.name = name
        this.advisor = funciarioEfetivo;
        this.workLoad = workLoad
    }

    work(): void {
        console.log(`Im ${this.name} and I do a vonlunteer work since ${this.workLoad} hours a week to complete my graduation`);
    }
}

class ResearcherEmployee implements IResearcherEmployee {
    advisor: IEmployee
    name: string
    workLoad: number

    constructor(name: string, workLoad: number, funciarioEfetivo: IEmployee) {
        this.name = name
        this.advisor = funciarioEfetivo;
        this.workLoad = workLoad
    }

    writeReport(): void {
        console.log(`Im ${this.name} and i write a report to my advisor ${this.advisor.name}`);
    }

    work(): void {
        console.log(`Im ${this.name} and I research ${this.workLoad} hours a week to complete my graduation`);
    }
}

const effectiveEmployee: IEffectiveEmployee = new EffectiveEmployee("João", 40, 2400);
const volunteerEmployee: IVolunteerEmploye = new EmployeeVolunteer("Enzo", 20, effectiveEmployee);
const researcherEmployee: IResearcherEmployee = new ResearcherEmployee("Matheus", 20, effectiveEmployee);

//Effective
console.log("name:", effectiveEmployee.name);
console.log("gross salary:", effectiveEmployee.salary);
console.log("net salary:", effectiveEmployee.calculateNetSalary());
console.log("salary with profit sharing:", effectiveEmployee.calculatesProfitSharing(2.5), "\n");

//Volunteer
console.log("name:", volunteerEmployee.name);

//Researcher
console.log("name:", researcherEmployee.name)