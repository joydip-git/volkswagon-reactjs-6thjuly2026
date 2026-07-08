import { Hr } from "./models/hr"
import { Developer } from "./models/developer";
import { Employee } from "./models/employee";
import { EmployeeManager } from "./services/employee-manager";
import { Manager } from "./services/manager";

const anilHr = new Hr(1, 'anil', 1000, 2000, 3000, 4000)
anilHr.calculateSalary()
const sunilDeveloper = new Developer(2, 'sunil', 1500, 2500, 3500, 4500)
sunilDeveloper.calculateSalary()

try {
    const manager: Manager<Employee> = new EmployeeManager()
    console.log(manager.add(anilHr) ? "added" : "failed")
    console.log(manager.add(sunilDeveloper) ? "added" : "failed")

    const records: readonly Employee[] = manager.getall()
    records
        .filter(
            function (e) {
                return e.salary > 10000
            }
        )
        .forEach(
            function (e) {
                console.log(`Name: ${e.name}, Salary: ${e.salary}`);
            }
        )
} catch (err: any) {
    console.log(err.message);
}