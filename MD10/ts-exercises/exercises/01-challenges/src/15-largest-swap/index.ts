/**
 * Write a function that takes a two-digit number and determines, if it's the largest of two possible digit swaps.
 */

import { resolveModuleName } from "typescript";

function largestSwap(number: number): boolean {
  const numArray = number.toString().split(" ");
  let result = true;
  for (let i = 0; i < numArray.length; i++) {
    let num = numArray[i];
    result = (+num / 10 > +num % 10) ? true : false;
  }
  return result
}

export { largestSwap };