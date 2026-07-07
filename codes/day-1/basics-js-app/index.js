var str1 = 'some string '
var str2 = 'another string'
// var str3 = 'concatenation of '
//     + str1
//     + ' and '
//     + str2 + 'is '
//     + (str1 + str2)

var str3 = `concatenation of 
            ${str1} 
            and
            ${str2} is 
            ${str1} ${str2}
            `

window.alert(str3)

var toContinue = 'n'

do {

    //print menu to user
    printMenu()

    //ask user to enter choice
    var choice = askUserForChoice()

    //ask user to enter values
    var first = askUserToEnterValue('first')
    var second = askUserToEnterValue('second')

    //calculation logic
    var resultString = calculate(choice, first, second)   
    
    //printing the result
    window.alert(resultString)

    //ask user to enter choice for continutaion
    toContinue = decideContinuation()

} while (toContinue !== 'n')
