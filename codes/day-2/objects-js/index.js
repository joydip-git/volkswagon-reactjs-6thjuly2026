//3. class and constructor keyword
class Person {
    constructor(idValue, nameValue, salaryValue) {
        this.id = idValue
        this.name = nameValue
        this.salary = salaryValue
        //return this
    }
    // print = function () {
    //     return `${this.id}, ${this.name}, ${this.salary}`
    // }
    print() {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}

class Trainer extends Person {
    constructor(idValue, nameValue, salaryValue, subjectValue) {
        super(idValue, nameValue, salaryValue)
        this.subject = subjectValue
    }
    print() {
        return `${super.print()} ${this.subject}`
    }
}

var anilObj = new Trainer(1, 'anil', 1000, 'JavaScript')
var sunilObj = new Trainer(2, 'sunil', 2000, 'Java')

window.alert(anilObj.print())
window.alert(sunilObj.print())