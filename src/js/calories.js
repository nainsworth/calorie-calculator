import "../assets/styles/main.scss";

import { profileOBJ } from "./utils/obj";
import { storeData, retrieveData, lbConversion } from "./utils/utils";
import { mifflinEquation } from "./utils/equations";

const infoOBJ = retrieveData("info");

let weightArray = [];
let calorieArray = [];

const formToOBJ = (form) => Object.fromEntries(new FormData(form));

const updateProfileCalories = () => {
  const profileDATA = profileOBJ;
  const formDATA = formToOBJ(document.getElementById("calorie-form"));

  profileDATA.calories = formDATA.calories;

  storeData("calories", profileDATA);
};

const calculateTDEE = () => {
  const bmr = mifflinEquation(
    infoOBJ.gender,
    infoOBJ.weight,
    infoOBJ.height,
    infoOBJ.age
  );

  return bmr * infoOBJ.activity;
};

const weightLossGoal = (TDEE, weight) => {
  for (let i = 0; i <= 0.01; i += 0.0025) {
    weightArray.push(weight * i);
  }
  weightArray.forEach((e) => {
    calorieArray.push(TDEE - e * 500);
  });
};

const weightGainGoal = (TDEE, weight) => {
  for (let i = 0; i <= 0.01; i += 0.0025) {
    weightArray.push(weight * i);
  }
  weightArray.reverse().forEach((e) => {
    calorieArray.push(TDEE + e * 500);
  });
};

const maintenanceGoal = (TDEE, weight) => {
  for (let i = -0.005; i <= 0.005; i += 0.0025) {
    weightArray.push(weight * i);
  }
  weightArray.reverse().forEach((e) => {
    calorieArray.push(TDEE + e * 500);
  });
};

const generateOptions = (TDEE, weight) => {
  const goalsOBJ = retrieveData("goals");

  if (goalsOBJ.goal === "lose") {
    weightLossGoal(TDEE, weight);
  } else if (goalsOBJ.goal === "gain") {
    weightGainGoal(TDEE, weight);
  } else {
    maintenanceGoal(TDEE, weight);
  }

  const option1 = document.getElementById("option-1");
  const label1 = document.getElementById("label-1");
  option1.value = calorieArray[0].toFixed(0);
  label1.innerHTML = `${calorieArray[0].toFixed(
    0
  )} Calories <span>${weightArray[0].toFixed(2)} lbs/wk</span>`;

  const option2 = document.getElementById("option-2");
  const label2 = document.getElementById("label-2");
  option2.value = calorieArray[1].toFixed(0);
  label2.innerHTML = `${calorieArray[1].toFixed(
    0
  )} Calories <span>${weightArray[1].toFixed(2)} lbs/wk</span>`;

  const option3 = document.getElementById("option-3");
  const label3 = document.getElementById("label-3");
  option3.value = calorieArray[2].toFixed(0);
  label3.innerHTML = `${calorieArray[2].toFixed(
    0
  )} Calories <span>${weightArray[2].toFixed(2)} lbs/wk</span>`;

  const option4 = document.getElementById("option-4");
  const label4 = document.getElementById("label-4");
  option4.value = calorieArray[3].toFixed(0);
  label4.innerHTML = `${calorieArray[3].toFixed(
    0
  )} Calories <span>${weightArray[3].toFixed(2)} lbs/wk</span>`;

  const option5 = document.getElementById("option-5");
  const label5 = document.getElementById("label-5");
  option5.value = calorieArray[4].toFixed(0);
  label5.innerHTML = `${calorieArray[4].toFixed(
    0
  )} Calories <span>${weightArray[4].toFixed(2)} lbs/wk</span>`;
};

const handleGoalButtonClick = () => {
  const infoSubmit = document.getElementById("calorie-btn");

  infoSubmit.addEventListener("click", () => {
    updateProfileCalories();
    location.href = "./results.html";
    console.log(retrieveData("calories"));
  });
};

generateOptions(parseInt(calculateTDEE()), lbConversion(infoOBJ.weight));
handleGoalButtonClick();
