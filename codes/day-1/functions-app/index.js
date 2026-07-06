//function <func-name>(comma searated list of arguments)
//{
//code
//optional return statement to return value
//}
//func-name(comma searated list of argument values/parameters)

//function declaration
print('This is to print', 10) //possible

function print(arg1, arg2) {
    window.alert(arg1 + arg2)
}

print('This is to print', 12)

//function expression
//left hand side -> variable declaration
//rigt hand side -> inline anonymous function

//var addResBefore = add(12, 3) //not possible

var add = function (a, b) {
    var res = a + b
    return res
}

var addRes = add(12, 13)
window.alert(addRes)

