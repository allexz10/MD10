/**
 * You have made a virtual onion and want to peel off the outer layer.
 * Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.
 * 
 * Example:
 * 
 * Input:
[
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"]
]

 * Output: 
[
  ["f", "g"],
  ["j", "k"]
]
 */

function peelTheOnion(onion: (string | number)[][]) {
  onion.shift();
  onion.pop();
  for (let i = 0; i < onion.length; i++) {
    onion[i].splice(0, 1);
    onion[i].splice(-1, 1);
  }
  return onion;
}

export { peelTheOnion };
