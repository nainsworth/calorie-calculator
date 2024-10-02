import "../assets/styles/main.scss";

import { profileOBJ } from "./utils/obj";
import { heightConversion, kgConversion, storeData } from "./utils/utils";

const formToOBJ = (form) => Object.fromEntries(new FormData(form));

const updateProfileInfo = () => {
  const profileDATA = profileOBJ.info;
  const formDATA = formToOBJ(document.getElementById("info-form"));

  profileDATA.name = formDATA.name;
  profileDATA.email = formDATA.email;
  profileDATA.gender = formDATA.gender;
  profileDATA.age = formDATA.age;
  profileDATA.height = heightConversion(formDATA.feet, formDATA.inches);
  profileDATA.weight = kgConversion(formDATA.weight);
  profileDATA.activity = formDATA.activity;

  storeData("info", profileDATA);
};

const handleButtonClick = () => {
  const buttons = document.querySelectorAll('input[type="button"]');

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.value === "Calculate") {
        updateProfileInfo();
        location.href = "./goals.html";
      } else {
        location.href = "./index.html";
      }
    });
  });
};

handleButtonClick();
