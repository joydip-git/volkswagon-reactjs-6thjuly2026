//source of data
const numbers = [1, 4, 2, 6, 3, 8, 9, 7, 0, 5]
const names = ['anil', 'sunil', 'joydip']


//operation
/*
const evenNumbers = numbers
    .filter(
        function (num) {
            return num % 2 === 0
        }
    )
const sortedEvenNumbers = evenNumbers
    .sort(
        function (a, b) {
            return a - b
        }
    )
sortedEvenNumbers
    .forEach(
        function (a) {
            console.log(a)
        }
    )

*/

numbers
    .filter(function (num) { return num % 2 === 0 })
    .sort(function (a, b) { return a - b })
    .map(function (a) { return `Value: ${a}` })
    .forEach(function (numStr) { console.log(numStr) })

const containsN = function (name) {
    return name.toLocaleLowerCase().includes('n')
}
const namesWithN = names.filter(containsN)
console.log(namesWithN);


const sortedNames = names.sort(
    function (name1, name2) {
        return name1.localeCompare(name2)
    }
)
console.log(sortedNames);

