/*
// function test() {
//     //let and const
//     console.log(x);//undefined
//     var x = 10
//     console.log(x);//10

//     for (var i = 0; i < 1; i++) {
//         var x = 20
//         console.log(x);//20
//     }

//     console.log(x);//10 or 20
// }
// function another() {
//     var x = 100
//     console.log(100);
// }

// test()
// another()


//function global(){
//console.log(x); <-- let variables can't be accessed before their declaration
let x = 10  //var x =10
console.log(x);//10

for (let i = 0; i < 1; i++) {
    let x = 20 //var _x = 20
    console.log(x);//20
}

console.log(x);//10
//}
//main()

//console.log(global);

const a = 10
//a = 'joydip'
console.log(a);

const arr = [10, 20]
arr.push(30)
console.log(arr);
const copyArr = arr.slice(0, 2)
console.log(copyArr);
const deletedArr = arr.splice(0, 2)
console.log(arr);
console.log(deletedArr);

*/
//pure function: a function which does not mutate the state of argument/data passed to it. simply producess different output at different point of time based on the input but in a similar fashion.

function filterValues(arr, callback) {
    const result = []
    // for (let index in arr) {
    //     arr[index]
    // }
    for (let value of arr) {
        //if (value % 2 === 0) {
        const isTrue = callback(value)
        if (isTrue) {
            result.push(value)
        }
    }
    return result
}

function sortValues(arr) {
    const copy = [...arr]
    for (let i = 0; i < copy.length; i++) {
        for (let j = i + 1; j < copy.length; j++) {
            if (copy[i] - copy[j] > 0) {
                const temp = copy[i]
                copy[i] = copy[j]
                copy[j] = temp
            }
        }
    }
    return copy
}

//source of data
const numbers = [1, 4, 2, 6, 3, 8, 9, 7, 0, 5]
console.log(numbers);

//operation
const isEven = function (num) {
    return num % 2 === 0 //? true : false
}
const evenNumbers = filterValues(numbers, isEven)
console.log(evenNumbers);

const isOdd = function (num) {
    return num % 2 !== 0 //? true : false
}
const oddNumbers = filterValues(numbers, isOdd)
console.log(oddNumbers);

const names = ['anil', 'sunil', 'joydip']

const containsN = function (name) {
    return name.toLocaleLowerCase().includes('n')
}
const namesWithN = filterValues(names, containsN)
console.log(namesWithN);

const sortedNumbers = sortValues(evenNumbers)
console.log(sortedNumbers);

numbers.filter(isEven)
numbers.filter(isOdd)
names.filter(containsN)

