import "../assets/styles/main.scss";

import { profileOBJ } from "./utils/obj";
import { storeData, retrieveData } from "./utils/utils";

const formToOBJ = (form) => Object.fromEntries(new FormData(form));

const updateProfileGoals = () => {
  const profileDATA = profileOBJ.goals;
  const formDATA = formToOBJ(document.getElementById("goal-form"));

  profileDATA.goal = formDATA.goal;
  profileDATA.weight = formDATA.weight;
  profileDATA.diet = formDATA.diet;
  profileDATA.protein = formDATA.protein;

  storeData("goals", profileDATA);
};

const handleButtonClick = () => {
  const buttons = document.querySelectorAll('input[type="button"]');

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.value === "Calculate") {
        updateProfileGoals();
        location.href = "./calories.html";
      } else {
        location.href = "./index.html";
      }
    });
  });
};

handleButtonClick();
