/**
 * Abigail and Benson are playing Rock, Paper, Scissors.
 * Each game is represented by an array of length 2, 
 * where the first element represents what Abigail played and the second element represents what Benson played.
 * Given a sequence of games, determine who wins the most number of matches and output the winners name. If they tie, output "Tie!".
 * R stands for Rock
 * P stands for Paper
 * S stands for Scissors
 */

function rockPaperScissors(games: string[][]) {
  let abigail = 0;
  let benson = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] === "R") {
      if (games[i][1] === "S") {
        abigail++
      }
      else if (games[i][1] === "P") {
        benson++
      }
    }
    else if (games[i][0] === "P") {
      if (games[i][1] === "S") {
        benson++
      }
      else if (games[i][1] === "R") {
        abigail++
      }
    }
    else if (games[i][0] === "S") {
      if (games[i][1] === "P") {
        abigail++
      }
      else if (games[i][1] === "R") {
        benson++
      }
    }
  } if (abigail > benson) {
    return "Abigail"
  } else if (abigail === benson) {
    return "Tie!"
  } else {
    return "Benson"
  }
}

export { rockPaperScissors };