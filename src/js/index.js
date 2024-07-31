import "../assets/styles/main.scss";

const imperial = document.querySelector("#imperial");
const metric = document.querySelector("#metric");
const imperialForm = document.querySelector("#imperial-from");
const metricForm = document.querySelector("#metric-form");

const units = document.querySelectorAll("input[name=radio-units]");
units.forEach((unit) =>
  unit.addEventListener("change", function () {
    checkUnit();
  })
);

const checkUnit = () => {
  if (imperial.checked) {
    document.querySelector(".imperial-form").hidden = false;
    document.querySelector(".metric-form").hidden = true;
  } else if (metric.checked) {
    document.querySelector(".imperial-form").hidden = true;
    document.querySelector(".metric-form").hidden = false;
  }
};


// const formToObj = (form) => {
//   Object.fromEntries(new FormData(form));
// };

// console.log(formToObj(document.querySelector("#calorie-form")));
