import fs from "fs";
let input: string;
input = fs.readFileSync("aInput.txt", "utf8");

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const findMatchingPairsFromString = (input: string) => {
    let packs = input.split("\r\n")
    let sum = 0;
    for(let pack of packs) {
        let pickedLetters = new Set<string>();
        for(let i=0; i<pack.length/2; i++) {
            for(let j=0; j<pack.length/2; j++) {
                if(pack[i] === pack[pack.length-j-1]) {
                    pickedLetters.add(pack[i])
                }
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