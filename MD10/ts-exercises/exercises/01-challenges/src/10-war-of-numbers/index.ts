/**
 * There's a great war between the even and odd numbers. 
 * Many numbers already lost their life in this war and it's your task to end this. 
 * You have to determine which group is larger: the even, or the odd. The larger group wins.
 * Create a function that takes an array of integers, sums the even and odd numbers seperately, 
 * then returns "Odd numbers win by X" or "Even numbers win by X", X is survivors.
 * If both groups are equal, return "There are no winners"
 */

function warOfNumbers(numbers: number[]) {
  const evenSumm = numbers.filter(num => num % 2 === 0).reduce((a, b) => a + b);
  const oddSumm = numbers.filter(num => num % 2 === 1).reduce((a, b) => a + b);
  if (evenSumm > oddSumm) {
    return `Even numbers win by ${evenSumm - oddSumm}`
  } else if (evenSumm === oddSumm) {
    return `There are no winners`
  } else {
    return `Odd numbers win by ${oddSumm - evenSumm}`
  }
}





export { warOfNumbers };