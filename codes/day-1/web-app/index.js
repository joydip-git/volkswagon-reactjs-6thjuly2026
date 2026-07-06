var x = 10
window.alert("value: " + x + ", data type: " + (typeof x))

var y = 12.34
window.alert("value: " + y + ", data type: " + (typeof y))

var nameValue = "Joydip"
window.alert("value: " + nameValue + ", data type: " + (typeof nameValue))

var isManager = true
window.alert("value: " + isManager + ", data type: " + (typeof isManager))

isManager = "yes"
window.alert("value: " + isManager + ", data type: " + (typeof isManager))

var res1 = x + y
window.alert(res1)

res1 = x - y
window.alert(res1)

res1 = x * y
window.alert(res1)

window.alert(x++)

x *= 5
window.alert(x)

window.alert(x > y ? 'greater' : 'lesser')

var a = 0
while (a < 5) {
    window.alert(a)
    a++
}

a = 0
do {
    window.alert(a);
    a++
} while (a < 5)

a = 1
switch (a) {
    case 1:
        window.alert(a)
        break;

    case 2:
        window.alert(a)
        break;

    default:
        window.alert('enter a proper choice')
        break;
}

/*
 equaility (==) ->  whether value of both operands are same or not
 strict equality (===) -> whether data type and value of both operands are same or not

 inequaility (!=) ->  whether value of both operands are not same or not
 strict inequality (!==) -> whether data type and value of both operands are not same or not
 */

var m = 10
var n = 20
if (m === n) {
    
}