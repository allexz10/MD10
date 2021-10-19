/**
 * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order in a new array.
 */

function maxMin(numbers: number[]): number[] {
   let min = numbers[0];
   let max = numbers[0];

   for (let i = 1; i < numbers.length; i++) {
      const num = numbers[i]
      min = (num < min) ? num : min;
      max = (num > max) ? num : max;
   }
   return [min, max]
}

export { maxMin };