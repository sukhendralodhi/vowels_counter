// variable declaration 

const inputField = document.getElementById("input");
const btn = document.getElementById("checkBtn");
const result = document.getElementById("result");


// function defination
const vowelsCounter = () => {
  let countVowels = 0;
  let inputValue = inputField.value.toLowerCase();

  if (inputField.value === "") {
    inputField.style.borderColor = "red";
  } else {
    inputField.style.borderColor = "purple";
    for (let i = 0; i < inputValue.length; i++) {
      let letters = inputValue[i];

      if (letters.match(/([a,e,i,o,u])/)) {
        countVowels++;
      }
    }
    result.innerText = `${inputField.value.toUpperCase()}, has ${countVowels} Vowels`;
    inputField.value = "";
  }
};


// eventlistener for calling function
btn.addEventListener("click", vowelsCounter);
