function printMenu() {
    window.alert("menu")
    window.alert("1. Add 2. subtract 3. multiply 4. divide")
}

function askUserForChoice() {
    var strChoice = window.prompt('enter choice[1/2/3/4]: ', 0) //1 -> '1'
    var choice = Number(strChoice) //'1' -> 1
    return choice
}

function askUserToEnterValue(message) {
    var value = Number(window.prompt(`enter ${message} value: `, 0))
    return value
}

function calculate(choice, first, second) {
    var result
    var operation

    switch (choice) {
        case 1:
            operation = 'add'
            result = first + second
            break;

        case 2:
            operation = 'subtract'
            result = first - second
            break;

        case 3:
            operation = 'multiply'
            result = first * second
            break;

        case 4:
            operation = 'divide'
            result = first / second
            break;

        default:
            return 'enter proper choice'
    }
    if (result === undefined && operation === undefined)
        return 'no calculation'
    else
        return 'result of ' + operation + ' is: ' + result
}

function decideContinuation() {
    var decision = window.prompt('continue?[y/Y/n/N]: ', 'n')
    return decision.toLocaleLowerCase()
}