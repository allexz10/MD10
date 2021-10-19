/**
 * You just returned home to find your mansion has been robbed! 
 * Given an object of the stolen items, return the total amount of the burglary (number).
 * If nothing was robbed, return the string "Lucky you!".
 */

function burglary(input: any) {
    if (!Object.keys(input).length) {
        return "Lucky you!";
    }
    return Object.values(input).reduce((a: any, b: any) => a + b);
}

export { burglary };