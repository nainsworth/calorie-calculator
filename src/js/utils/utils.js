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
  return (weight / 0.45359237).toFixed(0);
};

const storeData = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

const retrieveData = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};

export {
  heightConversion,
  kgConversion,
  lbConversion,
  storeData,
  retrieveData,
};
