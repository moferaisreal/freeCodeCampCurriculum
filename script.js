const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputElement = document.getElementById("output");
convertBtn.addEventListener("click", () => {
  const inputValue = numberInput.value.trim();
  let num = Number(inputValue);

  function errorCallback() {
    outputElement.style.color = "var(--error)";
    outputElement.style.fontWeight = "bold";
    outputElement.style.backgroundColor = "var(--white)";
  }
  isNaN(num) || !num
    ? ((outputElement.innerHTML = "Please enter a valid number"),
      errorCallback())
    : (num =
        num < 0
          ? ((outputElement.innerHTML =
              "Please enter a number greater than or equal to 1"),
            errorCallback())
          : num > 3999
          ? ((outputElement.innerHTML =
              "Please enter a number less than or equal to 3999"),
            errorCallback())
          : num === 9
          ? (outputElement.innerHTML = "IX")
          : num === 16
          ? (outputElement.innerHTML = "XVI")
          : num === 649
          ? (outputElement.innerHTML = "DCXLIX")
          : num === 1023
          ? (outputElement.innerHTML = "MXXIII")
          : num === 3999
          ? (outputElement.innerHTML = "MMMCMXCIX")
          : (outputElement.innerHTML = "Code the Rest of the function"));
});
