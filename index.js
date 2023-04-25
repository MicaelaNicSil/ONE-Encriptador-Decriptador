let encButton = document.getElementById("enc-button");
let decButton = document.getElementById("dec-button");
let copyButton = document.getElementById("copy-button");

let input1 = document.getElementById("insertTextField1");

let display = document.getElementById("result");

let form1 = document.getElementById("enc-form");
let decForm = document.getElementById("dec-form");

let messageDiv = document.getElementById("message-div");
let resultDiv = document.getElementById("result-div");

function encrypt() {
  var str = input1.value;

  let dict = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  result = str.replaceAll(/[aeiou]/gi, (match) => dict[match] || match);

  document.getElementById("result").value = result;

  console.log(result);
}

encButton.addEventListener("click", (e) => {
  e.preventDefault();
  encrypt();

  if (
    messageDiv.classList.contains("message-div") &&
    resultDiv.classList.contains("result-div2")
  ) {
    messageDiv.classList.add("message-div2");
    messageDiv.classList.remove("message-div");
    resultDiv.classList.add("result-div");
    resultDiv.classList.remove("result-div2");
  }
});

function decode() {
  var str = input1.value;

  let dictw = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  let dictl = {
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };

  let result = str.replace(/ai|enter|imes|ober|ufat/g, (match) => dictw[match] || match);

  result = result.replaceAll(/[aeiou]/g, (match) => dictl[match] || match);

  document.getElementById("result").value = result;
  console.log(result);
}

decButton.addEventListener("click", (e) => {
  e.preventDefault();
  decode();

  if (
    messageDiv.classList.contains("message-div") &&
    resultDiv.classList.contains("result-div2")
  ) {
    messageDiv.classList.add("message-div2");
    messageDiv.classList.remove("message-div");
    resultDiv.classList.add("result-div");
    resultDiv.classList.remove("result-div2");
  }
});

function copyText() {
  display.select();
  display.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert(`Copied to clipboard: ${display.value}`);
}
copyButton.addEventListener("click", copyText);
