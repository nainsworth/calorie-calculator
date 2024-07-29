import { heightConversion, weightConversion } from "./utils";

// Harris-Benedict Equation
const hbEquation = (sex, weight, feet, inches, age) => {
  const bmr = 0;
  if (sex === "Male") {
    return (
      88.362 +
      13.397 * weightConversion(weight) +
      4.799 * heightConversion(feet, inches) -
      5.677 * age
    );
  } else {
    return (
      447.593 +
      9.247 * weightConversion(weight) +
      3.098 * heightConversion(feet, inches) -
      4.33 * age
    );
  }

  return bmr;
};

// Mifflin-St.Jeor Equation
const msjEquation = (sex, weight, feet, inches, age) => {
  if (sex === "Male") {
    return (
      9.99 * weightConversion(weight) +
      6.25 * heightConversion(feet, inches) -
      4.92 * age +
      5
    );
  } else {
    return (
      9.99 * weightConversion(weight) +
      6.25 * heightConversion(feet, inches) -
      4.92 * age -
      161
    );
  }
};

// Katch-McArdle Equation
const kmEquation = (weight, bodyFat) => {
  const fatMass = weightConversion(weight) * bodyFat;
  const leanMass = weightConversion(weight) - fatMass;

  return 370 + (21.6 + leanMass);
};

export { hbEquation, msjEquation, kmEquation };
