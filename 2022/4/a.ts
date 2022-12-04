import fs from "fs";
let input: string;
input = fs.readFileSync("aInput.txt", "utf8");

const areValuesContained = (input: string) => {
  const pairs = input.split("\r\n").map((pair) => pair.replace("\r\n", ""));
  let pairCount = 0;
  console.log(pairs)
  for (let i = 0; i < pairs.length; i++) {
    let assignments = pairs[i].split(",").map((assignment) => assignment.split("-"));
    assignments[0][1] = assignments[0][1].replace(",", "");
    console.log(assignments);
    if (
      (parseInt(assignments[0][0]) <= parseInt(assignments[1][0]) &&
        parseInt(assignments[0][1]) >= parseInt(assignments[1][1])) ||
      (parseInt(assignments[0][0]) >= parseInt(assignments[1][0]) &&
        parseInt(assignments[0][1]) <= parseInt(assignments[1][1]))
    ) {
      pairCount++;
      console.log("countup")
    }
  }
    return pairCount;
};

console.log(areValuesContained(input));
