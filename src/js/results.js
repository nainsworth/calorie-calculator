const calorieTarget = document.getElementById("calorie-target");
const proteinTarget = document.getElementById("protein-target");
const fatTarget = document.getElementById("fat-target");
const carbTarget = document.getElementById("carb-target");
const fiberTarget = document.getElementById("fiber-target");

const proteinRatio = document.getElementById("protein-ratio");
const carbRatio = document.getElementById("carb-ratio");
const fatRatio = document.getElementById("fat-ratio");

const macroSliders = document.querySelectorAll('input[type="range"]');
const proteinSlider = document.getElementById("carb-ratio-slider");
const carbSlider = document.getElementById("carb-ratio-slider");
const fatSlider = document.getElementById("fat-ratio-slider");

let calorieObj = {
  calories: 2000,
  ratio: {
    protein: 30,
    fat: 30,
    carbs: 40,
  },
  macro: {
    protein: 150,
    fat: 67,
    carbs: 200,
    fiber: 28,
  },
};

// Macro Range Slider Event Listener
macroSliders.forEach((slider) => {
  slider.oninput = (e) => updateMacroInfo(e);
});

// Updates Macro Info
const updateMacroInfo = (e) => {
  if (e.target.name == "protein-ratio-slider") {
    calorieObj.ratio.protein = e.target.value;
    calorieObj.ratio.carbs =
      100 - calorieObj.ratio.protein - calorieObj.ratio.fat;

    updateTargets();
    loadTargets();
  } else if (e.target.name == "fat-ratio-slider") {
    calorieObj.ratio.fat = e.target.value;
    calorieObj.ratio.carbs =
      100 - calorieObj.ratio.protein - calorieObj.ratio.fat;

    updateTargets();
    loadTargets();
  } else if (e.target.name == "carb-ratio-slider") {
    calorieObj.ratio.carbs = e.target.value;
    calorieObj.ratio.fat =
      100 - calorieObj.ratio.protein - calorieObj.ratio.carbs;

    updateTargets();
    loadTargets();
  }
};

// Update Protein Target
const updateTargets = () => {
  calorieObj.macro.protein = Math.trunc((calorieObj.calories * (calorieObj.ratio.protein * 0.01)) / 4);
  calorieObj.macro.fat = Math.trunc(
    (calorieObj.calories * (calorieObj.ratio.fat * 0.01)) / 9
  );
  calorieObj.macro.carbs = Math.trunc(
    (calorieObj.calories * (calorieObj.ratio.carbs * 0.01)) / 4
  );
};

const loadTargets = () => {
  proteinTarget.innerText = `${calorieObj.macro.protein}g`;
  fatTarget.innerText = `${calorieObj.macro.fat}g`;
  carbTarget.innerText = `${calorieObj.macro.carbs}g`;
  calorieTarget.innerText = calorieObj.calories;

  proteinRatio.innerText = `${calorieObj.ratio.protein}%`;
  fatRatio.innerText = `${calorieObj.ratio.fat}%`;
  carbRatio.innerText = `${calorieObj.ratio.carbs}%`;

  proteinSlider.value = calorieObj.ratio.protein;
  fatSlider.value = calorieObj.ratio.fat;
  carbSlider.value = calorieObj.ratio.carbs;
};

// loadTargets();

