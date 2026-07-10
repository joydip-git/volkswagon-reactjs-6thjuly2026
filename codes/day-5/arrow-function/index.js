// function outer(value) {
//     this.x = value

//     // let inner = function () {
//     let inner = () => {

//         this.y = 20
//         console.log(this.x + this.y);
//     }

//     // inner = inner.bind(this)
//     inner()
// }

// var obj = new outer(10)
// console.log(obj);
// console.log(global);



// // const obj1 = new outer(10)
// // const obj2 = new outer(20)

// // console.log(obj1);
// // console.log(obj2);

let a = 100
function outer() {
    let b = 200

    function inner() {
        let c = 300
        console.log(a + b + c);
    }

    return inner
}

const innerFnRef = outer()
innerFnRef()
