import fs from "fs";
let input: string;
input = fs.readFileSync("bInput.txt", "utf8");

const getLargestCaloriesAmount = (calorieString: string) => {
    const calorieList = calorieString.split("\r\n\r\n");
    const caloriesAmount = calorieList.map((calorieListItem) => {
        const indiCalorie = calorieListItem.split("\r\n").map((calorie) => calorie.replace("\r\n", ""))
        console.log(indiCalorie)
        let sum = 0;
        for (let i = 0; i < indiCalorie.length; i++) {
            sum += parseInt(indiCalorie[i]);
        }
        return sum;
    });
    const topthree = caloriesAmount.sort((a, b) => b - a).splice(0, 3);
    return topthree[0] + topthree[1] + topthree[2];
}

console.log(getLargestCaloriesAmount(input));