import { heightConversion, weightConversion } from "./utils";

// Harris-Benedict Equation
const hbEquation = (sex, weight, height, age) => {
  const bmr = 0;
  if (sex === "Male") {
    return (
      88.362 +
      13.397 * weightConversion(weight) +
      4.799 * heightConversion(height) -
      5.677 * age
    );
  } else {
    return (
      447.593 +
      9.247 * weightConversion(weight) +
      3.098 * heightConversion(height) -
      4.33 * age
    );
  }

  return bmr;
};

// Mifflin-St.Jeor Equation
const msjEquation = (sex, weight, height, age) => {
  if (sex === "Male") {
    return (
      9.99 * weightConversion(weight) +
      6.25 * heightConversion(height) -
      4.92 * age +
      5
    );
  } else {
    return (
      9.99 * weightConversion(weight) +
      6.25 * heightConversion(height) -
      4.92 * age -
      161
    );
  }
};

// Katch-McArdle Equation
const kmEquation = (weight, height, age, bodyFat) => {
  const fatMass = weightConversion(weight) * bodyFat;
  const leanMass = weightConversion(weight) - fatMass;

  return 370 + (21.6 + leanMass);
};

export { hbEquation, msjEquation, kmEquation };
