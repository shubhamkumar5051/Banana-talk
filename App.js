var btnRefer = document.querySelector("#btnClick");
var txtInput = document.querySelector("#textStory");
var outputDiv = document.querySelector("#output");

function clickHandler() {
  outputDiv.innerHTML = "Translated : dfhgkjdfhkghdkl " + txtInput.value;
};

btnRefer.addEventListener("click", clickHandler);
