var btnRefer = document.querySelector("#btnClick");
var txtInput = document.querySelector("#textStory");
var outputDiv = document.querySelector("#output");
var serverUrl = "https://api.funtranslations.com/translate/chef.json";

function getTranslationURL(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error occured at server side ", error);
  alert("Server down, Try Again Later");
}

function clickHandler() {
  // outputDiv.innerHTML = "Translated : dfhgkjdfhkghdkl " + txtInput.value;

  var inputText = txtInput.value; //taking input
  fetch(getTranslationURL(inputText)) //calling server for processing
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler); //we dont have to pass error argument to errorHandler function
}

btnRefer.addEventListener("click", clickHandler);
