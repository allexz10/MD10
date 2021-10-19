/**
 * You have decided that you are an expert of love and want to start a dating service.
 * Given an array of women and an array of men, 
 * return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
 * If the array sizes don't match, return "Cupid is on vacation"
 */

function matchMaker(women: string[], men: string[]) {
  let pairArray = [];
  let result = [];
  if (women.length === men.length) {
    for (let i = 0; i < women.length; i++) {
      pairArray.push(women[i], men[i]);
    }
  } else {
    return "Cupid is on vacation";
  }
  while (pairArray.length > 0) {
    const pair = pairArray.splice(0, 2);
    result.push(pair);
  }
  return result;
}








export { matchMaker };