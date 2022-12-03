import fs from "fs";
let input: string;
input = fs.readFileSync("bInput.txt", "utf8");

const getRockPaperScissorsScore = (input: string) => {
  let scores: number[] = [];
  let score = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "A" || input[i] === "X") {
      scores.push(1);
    } else if (input[i] === "B" || input[i] === "Y") {
      scores.push(2);
    } else if (input[i] === "C" || input[i] === "Z") {
      scores.push(3);
    }
  }
  for (let i = 0; i < scores.length; i += 2) {
    if (
      (scores[i + 1] === 3)
    ) {
        if(scores[i] === 1) {
            score += 2;
        }
        if(scores[i] === 2) {
            score += 3;
        }
        if(scores[i] === 3) {
            score += 1;
        }
      score += 6;
    } else if (scores[i + 1] === 2) {
      score += 3;
      score += scores[i];
    } else {
        if(scores[i] === 1) {
            score += 3;
        }
        if(scores[i] === 2) {
            score += 1;
        }
        if(scores[i] === 3) {
            score += 2;
        }
    }
    
  }
  return score;
};

console.log(getRockPaperScissorsScore(input));
