const divide = (a, b) => {
    const p = new Promise(
        //executor function
        (resolveFnRef, rejectFnRef) => {
            const divRes = a / b

            if (divRes === Infinity) {
                const error = new Error('divisor should not be zero')
                //update Promise's state to rejected
                rejectFnRef(error)
            }

            //return divRes
            //update Promise's state to fulfilled/resolved
            resolveFnRef(divRes)
        }
    )
    return p
}

const add = (a, b) => a + b

const divPromise = divide(12, 3)
divPromise
    .then(
        (data) => {
            console.log(data);
        }
    )
    .catch(
        (err) => {
            console.log(err);
        }
    )

const addResult = add(12, 3)
console.log(addResult);