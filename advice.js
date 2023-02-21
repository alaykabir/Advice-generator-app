const API_URL = "https://api.adviceslip.com/advice";

function get(url) {
  return fetch(url).then((resp) => resp.json());
}
const API = {
  get,
};

const advice = document.querySelector("div#quote");
const adviceNum = document.querySelector("div#advice");

function getQuotes() {
  API.get(API_URL).then((data) => {
    return addQuote(data["slip"]["advice"]);
  });
}

function addQuote(quote) {
  advice.innerText = '"' + quote + '"';
  let x = Math.floor(Math.random() * 10000 + 1);
  adviceNum.innerHTML =
    "A" +
    "\xa0\xa0" +
    "D" +
    "\xa0\xa0" +
    "V" +
    "\xa0\xa0" +
    "I" +
    "\xa0\xa0" +
    "C" +
    "\xa0\xa0" +
    "E" +
    "\xa0\xa0\xa0\xa0" +
    "#" +
    x;
}

// function addNumber(number) {
//   advice.innerText = '"' + quote + '"';
// }

const reloadButton = document.querySelector("button#reload");
reloadButton.addEventListener("click", () => getQuotes());

document.body.onload = getQuotes;
