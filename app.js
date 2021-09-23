var textInput = document.querySelector("#inputArea");
var btnTranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#outputArea");

var URL = "https://api.funtranslations.com/translate/pirate.json";

function constructURL(text) {
  return (URL + "?text=" + text);
}

function errorHandler(error) {
  alert("Error occured: " + error);
}

function clickEventHandler() {
  fetch(constructURL(textInput.value))
    .then(response => response.json())
    .then(json => {
      output.innerHTML = json.contents.translated;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler)