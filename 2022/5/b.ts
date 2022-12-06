import fs from "fs";
let input: string;
input = fs.readFileSync("Input.txt", "utf8");

const moveStacks = (input: string) => {
  const inputArr = input
    .split("\r\n")
    .map((stack) => stack.replace("\r\n", ""));
  const directions: string[] = [];
  const stackString = (() => {
    const stringArr: string[] = [];
    let i = 0;
    while (inputArr[i][0] !== "m") {
      stringArr.push(inputArr[i]);
      i++;
    }
    for (i; i < inputArr.length; i++) {
      directions.push(inputArr[i]);
    }
    stringArr.pop();
    stringArr.pop();
    return stringArr;
  })();
  const parsedStacks = (() => {
    const stacks: { [index: number]: string[] } = {};
    stackString.forEach((stack, index) => {
      for (let i = 0; i < stack.length; i++) {
        if (i !== 0 && (i + 1) % 2 === 0) {
          if (stack[i] !== " ") {
            stacks[(i - 1) / 4]
              ? stacks[(i - 1) / 4].push(stack[i])
              : (stacks[(i - 1) / 4] = [stack[i]]);
          }
        }
      }
    });
    for (let i = 0; i < Object.keys(stacks).length; i++) {
      stacks[i].reverse();
    }
    return stacks;
  })();
  console.log(parsedStacks);
  directions.forEach((direction) => {
    const directionArr = direction
      .split(" ")
      .map((direction) => direction.trim());
    const amt = parseInt(directionArr[1]);
    const from = parseInt(directionArr[3]) - 1;
    const to = parseInt(directionArr[5]) - 1;
    const fromStack = parsedStacks[from];
    const toStack = parsedStacks[to];
    let newArr: string[] = [];
    for (let i = 0; i < amt; i++) {
      if (fromStack.length !== 0) {
        newArr.push(fromStack.pop()!);
      }
    }
    newArr.reverse();
    toStack.push(...newArr);
  });
  let string = "";
  for (let i = 0; i < Object.keys(parsedStacks).length; i++) {
    string += parsedStacks[i].pop();
  }
  return string;
};

console.log(moveStacks(input));
