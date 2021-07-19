var btnRefer = document.querySelector("#btnClick");
var txtInput = document.querySelector("#textStory");
btnRefer.addEventListener("click", function clicked() {
  console.log(txtInput.value);
  console.log("Submitted");
});
