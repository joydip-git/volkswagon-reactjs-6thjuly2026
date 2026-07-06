var x
// window.alert(x) //undefined
// window.alert(typeof x) //undefined

var y = 10
var res = x + y
window.alert(res) //NaN -> when a number type value is added with undefined variable
window.alert(typeof res) //number

var objRef = null //null is value giving the type of the variable as object
window.alert(objRef) //null
window.alert(typeof objRef) //object

var z = y / 0
window.alert(z) //Infinity
window.alert(typeof z) //number

try {
    if (z === Infinity) {
        var error = new Error('divisor should not be zero')
        throw error
    }
} catch (err) {
    window.alert(err.message)
}