const btn = document.getElementById("btn-translate");
const txtInput = document.getElementById("txt-input");
const outputDiv = document.querySelector("#output");
const serverURL = 'https://api.funtranslations.com/translate/doge.json'

btn.addEventListener("click", function clickeventHandler(){

    let inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated;
    })
    .catch(err => console.log("error occured ! ", error))
} ) 

function getTranslationUrl(text){
    return serverURL + "?" + "text=" + text ;
}