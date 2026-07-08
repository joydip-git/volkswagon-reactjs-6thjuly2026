import { Employee } from "../models/employee"
import { employees } from "../repository/employees"
import { Manager } from "./manager"

export class EmployeeManager implements Manager<Employee> {
    add(obj: Employee): Employee {
        const found = this.findemployee(obj.id)

        if (found)
            throw new Error(`employee with id: ${obj.id} exists`)
        else {
            employees.push(obj)
            return obj
        }
    }
    
    delete(id: number): Employee {

        const index = employees.findIndex(
            function (e) {
                return e.id === id
            }
        )

        if (index >= 0) {
            const deletedRecords = employees.splice(index, 1)
            return deletedRecords[0]
        } else
            throw new Error(`employee with id: ${id} does not exist`)
    }

    update(id: number, updated: Employee): Employee {
        const found = this.findemployee(id)
        if (found) {
            const index = employees.findIndex(
                function (e) {
                    return e.id === id
                }
            )
            employees.splice(index, 1, updated)
            return updated
        }
        else
            throw new Error(`employee with id: ${id} does not exist`)
    }
    getall(): Readonly<Employee[]> {
        return [...employees]
    }
    get(id: number): Employee {
        const found = this.findemployee(id)
        if (found)
            return found
        else
            throw new Error(`employee with id: ${id} does not exist`)
    }
    
    private findemployee(id: number) {
        return employees.find(
            function (e) {
                return e.id === id
            }
        )
    }
}