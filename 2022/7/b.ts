import fs from "fs";
let input: string;
input = fs.readFileSync("Input.txt", "utf8");

const readFiles = (input: string): number => {
  let inputArr = input.split("\r\n");
  let totals: number[] = [0];
  let allTotals: number[] = [];
  const spaceRequired = 30000000;
  const totalSpace = 70000000;

  for (let i = 0; i < inputArr.length; i++) {
    const line = inputArr[i];
    if (line === "$ cd /" || line === "$ ls" || line.startsWith("dir")) {
      continue;
    }
    if (line.startsWith("$ cd ")) {
      if (line[5] === ".") {
        const dirAmt = totals.pop();
        totals[totals.length - 1] += dirAmt!;
        allTotals.push(dirAmt!);
      } else {
        totals.push(0);
      }
      continue;
    }
    const num = parseInt(line.split(" ")[0].trimEnd());
    totals[totals.length - 1] += num;
  }
  for(let i=0; i<totals.length; i++) {
    const amt = totals.pop();
    allTotals.push(amt!)
    totals[0] += amt!;
  }
  const currentSpace = totals[0];
  const freeSpace = totalSpace - currentSpace!;
  const spaceRequiredToDelete = spaceRequired - freeSpace;
  allTotals = allTotals.filter((a) => a >= spaceRequiredToDelete);
  return Math.min(...allTotals);
};

console.log(readFiles(input));
