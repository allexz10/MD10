/**
 * You are on your way to becoming a professional, time to master objects.
 * Create a function that takes an object and returns the keys and values as separate arrays. 
 * Return the keys sorted alphabetically, and their corresponding values in the same order.
 */

function objectPro(input: any) {
    const keyArray = Object.keys(input);
    const valuesArray = Object.values(input);
    return [keyArray, valuesArray];
};




export { objectPro };