const divide = async (a, b) => {
    const divRes = a / b

    if (divRes === Infinity) {
        const error = new Error('divisor should not be zero')
        throw error
    }
    return divRes
}

const add = (a, b) => a + b

module.exports = {
    add,
    divide
}