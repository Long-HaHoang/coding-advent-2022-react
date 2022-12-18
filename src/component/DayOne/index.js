import { newInput } from "./Input";

const caloriesCarried = newInput;

export default function DayOne() {
  return (
    <>
      <p>Day 1:</p>
      <p>{`Part1: The elf with most calories has >${searchTheElf()}<cal in the bag!`}</p>
      <p>{`Part 2: The top three elfs have a sum of >${bestOfThree()}<cal`}</p>
    </>
  );
}

function calCalories() {
  let caloriesTemp = [];
  let eachTotalCalories = 0;
  for (let i = 0; i < caloriesCarried.length; i++) {
    if (i === caloriesCarried.length - 1) {
      eachTotalCalories = eachTotalCalories + caloriesCarried[i];
      caloriesTemp = [...caloriesTemp, eachTotalCalories];
    } else if (caloriesCarried[i] !== " ") {
      eachTotalCalories = eachTotalCalories + caloriesCarried[i];
    } else {
      caloriesTemp = [...caloriesTemp, eachTotalCalories];
      eachTotalCalories = 0;
    }
  }
  return caloriesTemp;
}

function searchTheElf() {
  const sumOfCalories = calCalories();
  const elfNumber = sumOfCalories.indexOf(Math.max(...sumOfCalories));

  return sumOfCalories[elfNumber];
}

function bestOfThree() {
  const sumOfCalories = calCalories();
  const orderOfCalories = sumOfCalories.sort(function (a, b) {
    return b - a;
  });
  const sumOfThree =
    orderOfCalories[0] + orderOfCalories[1] + orderOfCalories[2];
  return sumOfThree;
}
