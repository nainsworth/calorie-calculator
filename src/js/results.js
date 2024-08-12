const calorieTarget = document.getElementById("calorie-target");
const proteinTarget = document.getElementById("protein-target");
const fatTarget = document.getElementById("fat-target");
const carbTarget = document.getElementById("carb-target");
const fiberTarget = document.getElementById("fiber-target");

const proteinRatio = document.getElementById("protein-ratio");
const carbRatio = document.getElementById("carb-ratio");
const fatRatio = document.getElementById("fat-ratio");

const macroSliders = document.querySelectorAll('input[type="range"]');
const carbSlider = document.getElementById("carb-ratio-slider");
const fatSlider = document.getElementById("fat-ratio-slider");

let ratioArray = [];

let macroObj = {
  calories: 2000,
  protein: 150,
  fats: 67,
  carbs: 200,
  fiber: 28,
};

// Macro Range Slider Event Listener
macroSliders.forEach((slider) => {
  ratioArray.push(slider.value);

  slider.oninput = (e) => updateMacroInfo(e);
});

// Updates Macro Info
const updateMacroInfo = (e) => {
  if (e.target.name == "protein-ratio-slider") {
    ratioArray[0] = e.target.value;
    ratioArray[2] = 100 - ratioArray[0] - ratioArray[1];

    proteinRatio.innerText = `${ratioArray[0]}%`;
    carbRatio.innerText = `${ratioArray[2]}%`;
    carbSlider.value = ratioArray[2];
    
    updateTargets();
    loadTargets();
  } else if (e.target.name == "fat-ratio-slider") {
    ratioArray[1] = e.target.value;
    ratioArray[2] = 100 - ratioArray[0] - ratioArray[1];

    fatRatio.innerText = `${ratioArray[1]}%`;
    carbRatio.innerText = `${ratioArray[2]}%`;
    carbSlider.value = ratioArray[2];

    updateTargets();
    loadTargets();
  } else if (e.target.name == "carb-ratio-slider") {
    ratioArray[2] = e.target.value;
    ratioArray[1] = 100 - ratioArray[0] - ratioArray[2];

    carbRatio.innerText = `${ratioArray[2]}%`;
    fatRatio.innerText = `${ratioArray[1]}%`;
    fatSlider.value = ratioArray[1];

    updateTargets();
    loadTargets();
  }
};

// Update Protein Target
const updateTargets = () => {
  macroObj.protein = Math.trunc((macroObj.calories * (ratioArray[0] * 0.01)) / 4);
  macroObj.fats = Math.trunc((macroObj.calories * (ratioArray[1] * 0.01)) / 9);
  macroObj.carbs = Math.trunc((macroObj.calories * (ratioArray[2] * 0.01)) / 4);
  // macroObj.calories = macroObj.protein * 4 + macroObj.fats * 9 + macroObj.carbs * 4;
};

const loadTargets = () => {
  proteinTarget.innerText = `${macroObj.protein}g`;
  carbTarget.innerText = `${macroObj.carbs}g`;
  fatTarget.innerText = `${macroObj.fats}g`;
  calorieTarget.innerText = macroObj.calories;
};

loadTargets();
