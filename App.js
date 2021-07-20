var btnRefer = document.querySelector("#btnClick");
var txtInput = document.querySelector("#textStory");
var outputDiv = document.querySelector("#output");
var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text) {
  return serverUrl + "?" + "text=" + text;
}

function clickHandler() {
  // outputDiv.innerHTML = "Translated : dfhgkjdfhkghdkl " + txtInput.value;

  var inputText = txtInput.value; //taking input
  fetch(getTranslationURL(inputText)) //calling server for processing
    .then((response) => response.json())
    .then((json) => console.log(json.contents.translated));
}

btnRefer.addEventListener("click", clickHandler);
