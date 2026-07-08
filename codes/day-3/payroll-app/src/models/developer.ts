import { Employee } from "./employee"

export class Developer extends Employee {
    constructor(id: number, name: string, basic: number, da: number, hra: number, public incentive: number) {
        super(id, name, basic, da, hra)
    }

    calculateSalary(): void {
        super.calculateSalary()
        this._salary += this.incentive
    }
}