// Arrays populated with the vowels and coding patterns
const vowels = ["a", "e", "i", "o", "u"];
const encryptedVowels = ["ai", "enter", "imes", "ober", "ufat"];
let resultText = "";

function encryptDecrypt(id) {
  let inputUser = document.getElementById("inputText").value;
  resultText = "";
  if (inputUser === "") {
    return;
  } else if (id === 1) {
    // The function captures user input for parsing and substitutes vowels for patterns
    for (let i = 0; i < inputUser.length; i++) {
      if (inputUser[i] === vowels[0]) {
        resultText += encryptedVowels[0];
      } else if (inputUser[i] === vowels[1]) {
        resultText += encryptedVowels[1];
      } else if (inputUser[i] === vowels[2]) {
        resultText += encryptedVowels[2];
      } else if (inputUser[i] === vowels[3]) {
        resultText += encryptedVowels[3];
      } else if (inputUser[i] === vowels[4]) {
        resultText += encryptedVowels[4];
      } else {
        resultText += inputUser[i];
      }
    }
  } else if (id === 2) {
    const patternA = /ai/;
    const patternE = /enter/;
    const patternI = /imes/;
    const patternO = /ober/;
    const patternU = /ufat/;
    resultText = inputUser;
    for (let i = 0; i < resultText.length; i++) {
      resultText = resultText.replace(patternA, "a");
      resultText = resultText.replace(patternE, "e");
      resultText = resultText.replace(patternI, "i");
      resultText = resultText.replace(patternO, "o");
      resultText = resultText.replace(patternU, "u");
    }
  }
  const outputResult = document.getElementById("program__output");
  outputResult?.classList.add("program__outputResult");
  outputResult?.classList.remove("program__output");
  const newTex = document.getElementById("msg");
  newTex?.classList.add("program__output--msgResult");
  newTex?.classList.remove("program__output--msg");
  newTex.textContent = resultText;
  return;
}

function copy() {
  const copyText = document.getElementById("msg");
  const textToCopy = copyText?.textContent;
  const tempInput = document.createElement("input");
  tempInput.value = textToCopy;
  // Assuming tempInput is an HTMLInputElement
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
