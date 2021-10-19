/**
 * You're given a string of words. 
 * You need to find the word "Nemo", and return a string like so: "I found Nemo at X!", X is the index of the word.
 * If you can't find Nemo, return "I can't find Nemo :(".
 */

function findingNemo(input: string) {
    const indexOfNemo = input.split(' ').indexOf('Nemo');
    return indexOfNemo !== -1 ? `I found Nemo at ${indexOfNemo}!` : "I can't find Nemo :(";
}


export { findingNemo };