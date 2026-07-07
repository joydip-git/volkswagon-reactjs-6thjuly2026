//2-constructor function
function person(idValue, nameValue, salaryValue) {
    this.id = idValue
    this.name = nameValue
    this.salary = salaryValue
}
person.prototype.print = function () {
    return `${this.id}, ${this.name}, ${this.salary}`
}

function trainer(idValue, nameValue, salaryValue, subjectValue) {
    person.call(this, idValue, nameValue, salaryValue)
    this.subject = subjectValue
    this.print = function () {
        return `${person.prototype.print.apply(this)} ${this.subject}`
    }
}

//new keyword is an instruction to JS runtime to create a so-called blank object (at least proto property will be there)
//JS will link that object with the person function call followed by the new keyword
//in the person function the 'this' keyword refers to the object created by 'new' keyword in previous step
var anilObj = new trainer(1, 'anil', 1000, 'JS')
var sunilObj = new trainer(2, 'sunil', 2000, 'Java')

window.alert(anilObj.print())
window.alert(sunilObj.print())