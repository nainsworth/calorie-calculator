const proteinRatio = document.getElementById("protein-ratio");
const carbRatio = document.getElementById("carb-ratio");
const fatRatio = document.getElementById("fat-ratio");

const carbSlider = document.getElementById("carb-ratio-slider");
const fatSlider = document.getElementById("fat-ratio-slider");

const macroSliders = document.querySelectorAll('input[type="range"]');

const ratioArray = [];

// Macro Range Slider Event Listener
macroSliders.forEach((slider) => {
  ratioArray.push(slider.value);

  slider.oninput = (e) => updateMacroInfo(e);
});

// Updates Macro Info
const updateMacroInfo = (e) => {
  if (e.target.name == "protein-ratio-slider") {
    ratioArray[0] = e.target.value;
    ratioArray[2] = 100 - ratioArray[0] - ratioArray[1];

    proteinRatio.innerText = `${ratioArray[0]}%`;
    carbRatio.innerText = `${ratioArray[2]}%`;
    carbSlider.value = ratioArray[2];
  } else if (e.target.name == "fat-ratio-slider") {
    ratioArray[1] = e.target.value;
    ratioArray[2] = 100 - ratioArray[0] - ratioArray[1];

    fatRatio.innerText = `${ratioArray[1]}%`;
    carbRatio.innerText = `${ratioArray[2]}%`;
    carbSlider.value = ratioArray[2];
  } else if (e.target.name == "carb-ratio-slider") {
    ratioArray[2] = e.target.value;
    ratioArray[1] = 100 - ratioArray[0] - ratioArray[2];

    carbRatio.innerText = `${ratioArray[2]}%`;
    fatRatio.innerText = `${ratioArray[1]}%`;
    fatSlider.value = ratioArray[1];
  }
};
