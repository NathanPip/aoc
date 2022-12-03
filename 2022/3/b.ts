import fs from "fs";
let input: string;
input = fs.readFileSync("bInput.txt", "utf8");

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const findMatchingPairsFromString = (input: string) => {
    let packs = input.split("\r\n")
    let sum = 0;
    for(let z=0; z < packs.length-2; z+=3) {
        let pickedLetters = new Set<string>();

        for(let i=0; i<packs[z].length; i++) {
            if(packs[z+1].includes(packs[z][i]) && packs[z+2].includes(packs[z][i])) {
                pickedLetters.add(packs[z][i])
            }
        }
        console.log(Array.from(pickedLetters))
        for(let i=0; i<pickedLetters.size; i++) {
            sum += letters.indexOf(Array.from(pickedLetters)[i])+1
        }
    }
    return sum;
}

console.log(findMatchingPairsFromString(input));