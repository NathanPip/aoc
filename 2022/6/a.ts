import fs from "fs";
let input: string;
input = fs.readFileSync("Input.txt", "utf8");

const bitwise = (input: string) => {
  let sum = 0;
  for(let i=0; i<input.length-4; i++) {
    const set = new Set();
    set.add(input[i]), set.add(input[i+1]), set.add(input[i+2]), set.add(input[i+3]);
    console.log(set)
    if(set.size === 4) {
      return i+4;
    }
  }
  return sum;
}

console.log(bitwise(input));