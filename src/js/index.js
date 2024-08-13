import "../assets/styles/main.scss";

import { profileOBJ } from "./utils/obj";
import { heightConversion, weightConversion } from "./utils/utils";

const formToOBJ = (form) => Object.fromEntries(new FormData(form));

const updateProfileInfo = () => {
  const profileDATA = profileOBJ.info;
  const formDATA = formToOBJ(document.getElementById("info-form"));

  profileDATA.name = formDATA.name;
  profileDATA.email = formDATA.email;
  profileDATA.gender = formDATA.gender;
  profileDATA.age = formDATA.age;
  profileDATA.height = heightConversion(formDATA.feet, formDATA.inches);
  profileDATA.weight = weightConversion(formDATA.weight);
  profileDATA.activity = formDATA.activity;

  console.log(profileDATA);
};

const handleInfoButtonClick = () => {
  const infoSubmit = document.getElementById("info-btn");

  infoSubmit.addEventListener("click", () => {
    updateProfileInfo();
    location.href = "./goals.html";
  });
};

handleInfoButtonClick();

export { updateProfileInfo };
