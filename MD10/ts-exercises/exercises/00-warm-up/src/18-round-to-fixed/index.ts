/**
 * Write a function that rounds up the given number to two decimal places.
 * 
 * Example
 * 
 * Input: 4.555
 * 
 * Output: 4.56
 */

import { numberToString } from "../02-number-to-string";

function roundTofixed(input: number): number {
    return +input.toFixed(2);
}


export { roundTofixed };