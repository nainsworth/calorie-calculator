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

  storeData("goals", profileDATA)
};

const handleGoalButtonClick = () => {
  const infoSubmit = document.getElementById("goal-btn");

  infoSubmit.addEventListener("click", () => {
    updateProfileGoals();
    location.href = "./calories.html";
    // console.log(retrieveData("info"), retrieveData("goals"));
    // console.log(profileOBJ);
    
    
  });
};

handleGoalButtonClick();

export { updateProfileGoals };
