async function getProducts() {
    try {
        const response = await fetch('http://127.0.0.1:3003/products')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getProducts()