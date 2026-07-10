function add(a: number, b: number) {
    return a + b
}

//function expression
//1. regular/normal
const subtract = function (a: number, b: number) {
    return a - b
}

//2.i. arrow function with code body
const nultiply = (a: number, b: number) => {
    return a * b
}
//2.ii. arrow function with expression body
const divide = (a: number, b: number) => a / b

type fntype = (a: number, b: number) => number //function typification


