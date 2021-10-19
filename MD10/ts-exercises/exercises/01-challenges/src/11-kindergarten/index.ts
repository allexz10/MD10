/**
 * You have decided to teach programming at a kindergarten, but you cannot understand half of what the children are saying.
 * Write a function that reverses all the words in a sentence that start with a particular letter.
 */

function kindergarten(sentence: string, letter: string): string {

  const wordArray = sentence.split(" ");
  const resualt = [];

  for (let i = 0; i < wordArray.length; i++) {
    wordArray[i].charAt(0) === letter ? resualt.push(wordArray[i].split("").reverse().join("")) : resualt.push(wordArray[i]);
  }
  return resualt.join(" ");
}

export { kindergarten };