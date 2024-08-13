/******/ (() => { // webpackBootstrap
/*!***************************!*\
  !*** ./src/js/results.js ***!
  \***************************/
var calorieTarget = document.getElementById("calorie-target");
var proteinTarget = document.getElementById("protein-target");
var fatTarget = document.getElementById("fat-target");
var carbTarget = document.getElementById("carb-target");
var fiberTarget = document.getElementById("fiber-target");
var proteinRatio = document.getElementById("protein-ratio");
var carbRatio = document.getElementById("carb-ratio");
var fatRatio = document.getElementById("fat-ratio");
var macroSliders = document.querySelectorAll('input[type="range"]');
var proteinSlider = document.getElementById("carb-ratio-slider");
var carbSlider = document.getElementById("carb-ratio-slider");
var fatSlider = document.getElementById("fat-ratio-slider");
var calorieObj = {
  calories: 2000,
  ratio: {
    protein: 30,
    fat: 30,
    carbs: 40
  },
  macro: {
    protein: 150,
    fat: 67,
    carbs: 200,
    fiber: 28
  }
};

// Macro Range Slider Event Listener
macroSliders.forEach(function (slider) {
  slider.oninput = function (e) {
    return updateMacroInfo(e);
  };
});

// Updates Macro Info
var updateMacroInfo = function updateMacroInfo(e) {
  if (e.target.name == "protein-ratio-slider") {
    calorieObj.ratio.protein = e.target.value;
    calorieObj.ratio.carbs = 100 - calorieObj.ratio.protein - calorieObj.ratio.fat;
    updateTargets();
    loadTargets();
  } else if (e.target.name == "fat-ratio-slider") {
    calorieObj.ratio.fat = e.target.value;
    calorieObj.ratio.carbs = 100 - calorieObj.ratio.protein - calorieObj.ratio.fat;
    updateTargets();
    loadTargets();
  } else if (e.target.name == "carb-ratio-slider") {
    calorieObj.ratio.carbs = e.target.value;
    calorieObj.ratio.fat = 100 - calorieObj.ratio.protein - calorieObj.ratio.carbs;
    updateTargets();
    loadTargets();
  }
};

// Update Protein Target
var updateTargets = function updateTargets() {
  calorieObj.macro.protein = Math.trunc(calorieObj.calories * (calorieObj.ratio.protein * 0.01) / 4);
  calorieObj.macro.fat = Math.trunc(calorieObj.calories * (calorieObj.ratio.fat * 0.01) / 9);
  calorieObj.macro.carbs = Math.trunc(calorieObj.calories * (calorieObj.ratio.carbs * 0.01) / 4);
};
var loadTargets = function loadTargets() {
  proteinTarget.innerText = "".concat(calorieObj.macro.protein, "g");
  fatTarget.innerText = "".concat(calorieObj.macro.fat, "g");
  carbTarget.innerText = "".concat(calorieObj.macro.carbs, "g");
  calorieTarget.innerText = calorieObj.calories;
  proteinRatio.innerText = "".concat(calorieObj.ratio.protein, "%");
  fatRatio.innerText = "".concat(calorieObj.ratio.fat, "%");
  carbRatio.innerText = "".concat(calorieObj.ratio.carbs, "%");
  proteinSlider.value = calorieObj.ratio.protein;
  fatSlider.value = calorieObj.ratio.fat;
  carbSlider.value = calorieObj.ratio.carbs;
};

// loadTargets();
/******/ })()
;
//# sourceMappingURL=results.bundle.js.map