export class Employee {
    protected _salary = 0

    constructor(public id: number, public name: string, public basic: number, public da: number, public hra: number) {

    }

    get salary() {
        return this._salary
    }
    calculateSalary() {
        this._salary = this.basic + this.da + this.hra
    }
}