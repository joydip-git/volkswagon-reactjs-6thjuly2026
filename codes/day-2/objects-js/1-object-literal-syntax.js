//1-object-literal-syntax

var anilObj = {
    //value properties
    id: 1,
    name: 'anil',
    salary: 1000,

    //functional property
    print: function () {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}
/*
window.alert(anilObj.name)
window.alert(anilObj['salary'])

window.alert(anilObj.print())
//window.alert(anilObj['print']())


//anilObj.location = 'Bangalore'
anilObj['location'] = 'Bangalore'
anilObj.sayHello = function () {
    return `Hello ${this.name}`
}

// window.alert(anilObj.location)
// window.alert(anilObj.sayHello())

//var copyObj = {}
// for (var propName in anilObj) {
//     var propValue = anilObj[propName]
//     window.alert(`${propName}:${propValue}`)
//     copyObj[propName] = propValue
// }

//var copyObj = anilObj

// spread opeartor (...)
var copyObj = { ...anilObj }
for (var prop in copyObj) {
    var val = copyObj[prop]
    window.alert(`${prop}:${val}`)
}
*/

// var arr = {
//     0: 10,
//     1: 20,
//     2: 30,
//     3: 40
// }
var arr = [10, 20, 30, 40, 'joydip', true]
// window.alert(arr)
// window.alert(typeof arr)

//using spread operator copy values from one array to another
var targetArr = [...arr, 60, 'volkswagen']
window.alert(targetArr)