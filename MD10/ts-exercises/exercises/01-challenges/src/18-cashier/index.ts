/**
 * Today you work at a store as the cashier, but 10 minutes before your lunch break, the cash register stops working.
 * Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. 
 * A grocery object has a product, a quantity and a price.
 */

function cashier(groceries: Grocery[]) {
    let summ = 0;
    for (let item of groceries) {
        summ += (item["quantity"] * item["price"])
    }
    return parseFloat(summ.toFixed(2));
}

export { cashier };

interface Grocery {
    product: string;
    quantity: number;
    price: number;
}