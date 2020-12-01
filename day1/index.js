const fs = require("fs");
const data = fs.readFileSync("day1/input.txt", "utf8").split("\n").map((numbers) => parseInt(numbers));
const targetValue = 2020;

const getResult = (number) => console.log(number);

const multiplyTwoNumbers = (firstNumber, secondNumber) => getResult(firstNumber * secondNumber);
const multiplyThreeNumbers = (firstNumber, secondNumber, thirdNumber) => getResult(firstNumber * secondNumber * thirdNumber);

const test1 = (firstNumber, secondNumber) => firstNumber + secondNumber === targetValue;
const test2 = (firstNumber, secondNumber, thirdNumber) => firstNumber + secondNumber + thirdNumber === targetValue;

const part1 = (numbers) => numbers.forEach((i) => numbers.forEach((j) => test1(i,j) && multiplyTwoNumbers(i, j)));
const part2 = (numbers) => numbers.forEach((i) => numbers.forEach((j) => numbers.forEach(p => test2(i,j,p) && multiplyThreeNumbers(i,j,p))));

part1(data);
part2(data);
