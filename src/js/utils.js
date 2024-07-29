// Height to CM
const heightConversion = (feet, inches) => {
  return feet * 30.48 + inches * 2.54;
};

// Weight to KG
const weightConversion = (weight) => {
  return weight * 0.45359237;
};

export { heightConversion, weightConversion };
