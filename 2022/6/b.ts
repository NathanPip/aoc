import fs from "fs";
let input: string;
input = fs.readFileSync("Input.txt", "utf8");

const bitwise = (input: string) => {
  let sum = 0;
  for(let i=0; i<input.length-14; i++) {
    const set = new Set();
    for(let j=0; j<14; j++) {
      if(j===0) set.add(input[i]);
      set.add(input[i+j]);
    }
    console.log(set)
    if(set.size === 14) {
      return i+14;
    }
  }
  return sum;
}

console.log(bitwise(input));