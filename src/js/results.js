import "../assets/styles/main.scss";
import { profileOBJ } from "./utils/obj";
import { storeData, retrieveData } from "./utils/utils";
import emailjs from "@emailjs/browser";

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

const info = retrieveData("info");
const goals = retrieveData("goals");
const calories = retrieveData("calories").calories;

// Set Macro Ratio
const setMacroRatio = () => {
  let proteinRatio = 0;
  let fatRatio = 0;
  let carbRatio = 0;

  if (goals.protein === "low") {
    proteinRatio = 25;
  } else if (goals.protein === "high") {
    proteinRatio = 35;
  } else if (goals.protein === "extra-high") {
    proteinRatio = 40;
  } else {
    proteinRatio = 30;
  }

  if (goals.diet === "low-fat") {
    fatRatio = 25;
  } else if (goals.diet === "low-carb") {
    fatRatio = 35;
  } else {
    fatRatio = 30;
  }

  carbRatio = 100 - proteinRatio - fatRatio;

  return {
    protein: proteinRatio,
    fat: fatRatio,
    carbs: carbRatio,
  };
};

const macro = setMacroRatio();

let calorieObj = {
  calories: calories,
  ratio: {
    protein: macro.protein,
    fat: macro.fat,
    carbs: macro.carbs,
  },
  macro: {
    protein: 0,
    fat: 0,
    carbs: 0,
    fiber: ((calories / 1000) * 14).toFixed(0),
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
  } else if (e.target.name == "fat-ratio-slider") {
    calorieObj.ratio.fat = e.target.value;
    calorieObj.ratio.carbs =
      100 - calorieObj.ratio.protein - calorieObj.ratio.fat;
  } else if (e.target.name == "carb-ratio-slider") {
    calorieObj.ratio.carbs = e.target.value;
    calorieObj.ratio.fat =
      100 - calorieObj.ratio.protein - calorieObj.ratio.carbs;
  }
  loadTargets();
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
  fiberTarget.innerText = `${calorieObj.macro.fiber}g`;
  calorieTarget.innerText = calorieObj.calories;

  proteinRatio.innerText = `${calorieObj.ratio.protein}%`;
  fatRatio.innerText = `${calorieObj.ratio.fat}%`;
  carbRatio.innerText = `${calorieObj.ratio.carbs}%`;

  proteinSlider.value = calorieObj.ratio.protein;
  fatSlider.value = calorieObj.ratio.fat;
  carbSlider.value = calorieObj.ratio.carbs;

  console.log(calorieObj);
};

const sendEmail = () => {
  const templateParams = {
    email: info.email,
    name: info.name,
    subject: "Here is your Macros!",
    calories: `${calorieObj.calories} cals`,
    protein: `${calorieObj.macro.protein} g`,
    fat: `${calorieObj.macro.fat} g`,
    carbs: `${calorieObj.macro.carbs} g`,
    fiber: `${calorieObj.macro.fiber} g`,
  };

  emailjs
    .send("service_ygq3w1t", "template_xkks148", templateParams, {
      publicKey: "Gm5AsgsgNtUwToYiH",
    })
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
};

const handleGoalButtonClick = () => {
  const infoSubmit = document.getElementById("send-btn");

  infoSubmit.addEventListener("click", () => {
    sendEmail();
  });
};

loadTargets();
handleGoalButtonClick();

console.log(
  retrieveData("info"),
  retrieveData("goals"),
  retrieveData("calories")
);
