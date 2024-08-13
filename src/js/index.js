import "../assets/styles/main.scss";

import "./results";
import { heightConversion, weightConversion } from "./utils";

const profileOBJ = {
  info: {
    name: "",
    email: "",
    gender: "",
    age: 0,
    height: 0,
    weight: 0,
    activity: 0,
  },
  goals: {
    goal: "",
    weight: 0,
    diet: "",
    protein: "",
  },
  calories: 0,
  ratio: {
    protein: 0,
    fat: 0,
    carbs: 0,
  },
  macro: {
    protein: 0,
    fat: 0,
    carbs: 0,
    fiber: 0,
  },
};

const infoSubmit = document.getElementById("info-btn");
const formToOBJ = (form) => Object.fromEntries(new FormData(form));

infoSubmit.addEventListener("click", () => updateProfileInfo());

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
};
