const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputElement = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  const inputValue = numberInput.value.trim();
  isNaN(inputValue) || !inputValue
    ? (outputElement.innerHTML = "Please enter a valid number")
    : (inputValue =
        inputValue < 0
          ? (outputElement.innerHTML =
              "Please enter a number greater than or equal to 1") //continua a function to convert
          : console.log(inputValue));
});
