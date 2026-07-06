function printMenu() {
    window.alert("menu")
    window.alert("1. Add 2. subtract 3. multiply 4. divide")
}

function askUserForChoice() {
    var strChoice = window.prompt('enter choice[1/2/3/4]: ', 0) //1 -> '1'
    var choice = Number(strChoice) //'1' -> 1
    return choice
}

var toContinue = 'n'
do {

    //print menu to user
    printMenu()

    //ask user to enter choice
    var choice = askUserForChoice()

    //ask user to enter values
    var first = Number(window.prompt('enter first value: ', 0)) //-> 12 -> '12' -> 12
    var second = Number(window.prompt('enter second value: ', 0))

    //calculation logic
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
            window.alert('enter proper choice')
            break;
    }

    //printing the result
    if (result === undefined && operation === undefined)
        window.alert('no calculation')
    else
        window.alert('result of ' + operation + ' is: ' + result)

    //ask user to enter choice for continutaion
    toContinue = window.prompt('continue?[y/Y/n/N]: ', 'n')    
    toContinue = toContinue.toLocaleLowerCase()

} while (toContinue !== 'n')
