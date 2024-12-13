// Height to CM
const heightConversion = (feet, inches) => {
  return (feet * 30.48 + inches * 2.54).toFixed(2);
};

// Weight to KG
const kgConversion = (weight) => {
  return (weight * 0.45359237).toFixed(2);
};
// Weight to lb
const lbConversion = (weight) => {
  return (weight / 0.45359237).toFixed(2);
};

// Harris-Benedict Equation
const bmrEquation = (sex, weight, height, age) => {
  const bmr = 0;
  if (sex === "male") {
    return 66.5 + (13.75 * weight) + (5 * height) - (6.75 * age);
  } else {
    return 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
  }
};

const storeData = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

const retrieveData = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};

export {
  bmrEquation,
  heightConversion,
  kgConversion,
  lbConversion,
  storeData,
  retrieveData,
};
