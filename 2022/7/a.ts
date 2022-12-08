import fs from "fs";
let input: string;
input = fs.readFileSync("Input.txt", "utf8");

const addTotalsFromSystem = (input: string): number => {
    let inputArr = input.split("\r\n");

    let totals: number[] = [];

    let total = 0;
    const limit = 100000;

    for(let i=0; i<inputArr.length; i++) {
        const line = inputArr[i];
        if(line === "$ cd /" || line === "$ ls" || line.startsWith("dir")) {
            continue;
        }
        if(line.startsWith("$ cd ")) {
            if(line[5] === ".") {
                const dirAmt = totals.pop();
                totals[totals.length-1] += dirAmt!;
                if(dirAmt! <= limit) {
                    total += dirAmt!;
                }
            } else {
                totals.push(0);
            }
            continue;
        }
        const num = parseInt(line.split(" ")[0].trimEnd());
        totals[totals.length-1] += num;
    }
    return total;
}

console.log(addTotalsFromSystem(input));