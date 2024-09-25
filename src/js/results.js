import "../assets/styles/main.scss";
import { profileOBJ } from "./utils/obj";
import { storeData, retrieveData } from "./utils/utils";

const calorieTarget = document.getElementById("calorie-target");
const proteinTarget = document.getElementById("protein-target");
const fatTarget = document.getElementById("fat-target");
const carbTarget = document.getElementById("carb-target");
const fiberTarget = document.getElementById("fiber-target");

const proteinRatio = document.getElementById("protein-ratio");
const carbRatio = document.getElementById("carb-ratio");
const fatRatio = document.getElementById("fat-ratio");

const macroSliders = document.querySelectorAll('input[type="range"]');
const proteinSlider = document.getElementById("protein-ratio-slider");
const carbSlider = document.getElementById("carb-ratio-slider");
const fatSlider = document.getElementById("fat-ratio-slider");

const goals = retrieveData("goals");
const calories = retrieveData("calories").calories;

let calorieObj = {
  calories: calories,
  ratio: {
    protein: 30,
    fat: 30,
    carbs: 40,
  },
  macro: {
    protein: 0,
    fat: 0,
    carbs: 0,
    fiber: 0,
  },
};

// Set Macro Ratio
const setMacroRatio = () => {
  let protein = 0;
  let fat = 0;
  let carb = 0;

  if (goals.protein === "low") {
    protein = 25;
  } else if (goals.protein === "high") {
    protein = 35;
  } else if (goals.protein === "extra-high") {
    protein = 40;
  } else { 
    protein = 30;
  }

  if (goals.diet === "low-fat") {
    fat = 25;
  } else if (goals.diet === "low-carb") {
    fat = 35;
  } else {
    fat = 30;
  }

  carb = 100 - protein - fat;
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

    loadTargets();
  } else if (e.target.name == "fat-ratio-slider") {
    calorieObj.ratio.fat = e.target.value;
    calorieObj.ratio.carbs =
      100 - calorieObj.ratio.protein - calorieObj.ratio.fat;

    loadTargets();
  } else if (e.target.name == "carb-ratio-slider") {
    calorieObj.ratio.carbs = e.target.value;
    calorieObj.ratio.fat =
      100 - calorieObj.ratio.protein - calorieObj.ratio.carbs;

    loadTargets();
  }
};

// Update Protein Target
const updateTargets = () => {
  calorieObj.macro.protein = Math.trunc(
    (calorieObj.calories * (calorieObj.ratio.protein * 0.01)) / 4
  );
  calorieObj.macro.fat = Math.trunc(
    (calorieObj.calories * (calorieObj.ratio.fat * 0.01)) / 9
  );
  calorieObj.macro.carbs = Math.trunc(
    (calorieObj.calories * (calorieObj.ratio.carbs * 0.01)) / 4
  );
};

const loadTargets = () => {
  updateTargets();

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

  console.log(calorieObj);
};

loadTargets();

console.log(
  retrieveData("info"),
  retrieveData("goals"),
  retrieveData("calories")
);
