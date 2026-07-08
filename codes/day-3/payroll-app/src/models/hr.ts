import { Employee } from "./employee"

export class Hr extends Employee {
    constructor(id: number, name: string, basic: number, da: number, hra: number, public gratuity: number) {
        super(id, name, basic, da, hra)
    }

    calculateSalary(): void {
        super.calculateSalary()
        this._salary += this.gratuity
    }
}