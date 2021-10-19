/**
 * Write a function that returns true if the given string ends with a question mark, false if not.
 * 
 * Example
 * 
 * Input: "French fries?"
 * Output: true
 */

function isQuestion(input: string):boolean { 
    return input.slice(-1) === "?" ? true : false ;
}

export { isQuestion };