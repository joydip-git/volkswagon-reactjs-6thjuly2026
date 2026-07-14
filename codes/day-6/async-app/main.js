const { add, divide } = require('./utility')

async function call() {
    try {
        const data = await divide(12, 3)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
call()

const addResult = add(12, 3)
console.log(addResult);