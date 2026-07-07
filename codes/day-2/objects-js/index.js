//2-constructor function
function person(idValue, nameValue, salaryValue) {
    this.id = idValue
    this.name = nameValue
    this.salary = salaryValue
    this.print = function () {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
    //return this
}

//new keyword is an instruction to JS runtime to create a so-called blank object (at least proto property will be there)
//JS will link that object with the person function call followed by the new keyword
//in the person function the 'this' keyword refers to the object created by 'new' keyword in previous step
var anilObj = new person(1, 'anil', 1000)
var sunilObj = new person(2, 'sunil', 2000)

window.alert(anilObj.print())
window.alert(sunilObj.print())