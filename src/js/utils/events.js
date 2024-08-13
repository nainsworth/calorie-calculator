import { updateProfileInfo } from "../index.js";

const handleInfoButtonClick = () => {
  const infoSubmit = document.getElementById("info-btn");

  infoSubmit.addEventListener("click", () => {
    updateProfileInfo();
    location.href = "./goals.html";
    infoSubmit.style.visibility = "hidden";
  });
};

export { handleInfoButtonClick };