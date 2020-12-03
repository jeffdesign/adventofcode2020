const fs = require("fs");
const data = fs
  .readFileSync("day2/input.txt", "utf8")
  .split("\n")
  .map((passwordSet) => {
    const str = passwordSet.replace(":", "").split(/[.,\/ -]/);
    return {
      rule: { min: str[0], max: str[1], value: str[2] },
      password: str[3],
    };
  });

const getResult = (number) => console.log(number);

const part1 = (passwordSets) => {
  const test = passwordSets.filter((passwordSet) => {
    // First see if target value contains targets value
    const rowContainsTargetValue = passwordSet.password.includes(
      passwordSet.rule.value
    );

    // Now see how many occurrences it has
    const targetValueAmountOfOccurrences = passwordSet.password
      .split("")
      .filter((letter) => letter === passwordSet.rule.value).length;

    // Check if passwordSet meets our criteras
    const passwordCritera =
      targetValueAmountOfOccurrences >= passwordSet.rule.min &&
      targetValueAmountOfOccurrences <= passwordSet.rule.max;

    return (
      rowContainsTargetValue &&
      targetValueAmountOfOccurrences &&
      passwordCritera
    );
  });
  return test.length;
};

const part2 = (passwordSets) => {
  const test = passwordSets.filter((passwordSet) => {
    // First see if target value contains targets value
    const rowContainsTargetValue = passwordSet.password.includes(
      passwordSet.rule.value
    );

    // Save indexes
    const firstIndex = passwordSet.rule.min - 1;
    const secondIndex = passwordSet.rule.max - 1;

    // Check that target value doesn't occur in both indexes
    const firstIndexIsNotSecondIndex =
      passwordSet.password[firstIndex] !== passwordSet.password[secondIndex];

    // Lastly check if target value occur in first or second index
    const passwordHasTargetValue =
      passwordSet.rule.value === passwordSet.password[firstIndex] ||
      passwordSet.rule.value === passwordSet.password[secondIndex];

    return (
      passwordHasTargetValue &&
      firstIndexIsNotSecondIndex &&
      rowContainsTargetValue
    );
  });
  return test.length;
};

getResult(part1(data));
getResult(part2(data));
