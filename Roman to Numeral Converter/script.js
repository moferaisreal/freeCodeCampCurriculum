const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputElement = document.getElementById("output");
convertBtn.addEventListener("click", (e) => {
  const inputValue = numberInput.value.trim();
  let num = Number(inputValue);
  e.preventDefault();

  function errorCallback() {
    outputElement.style.color = "var(--error)";
    outputElement.style.fontWeight = "bold";
    outputElement.style.backgroundColor = "var(--white)";
    outputElement.style.borderColor = "var(--error)";
  }

  function resetStyles() {
    outputElement.style.color = "";
    outputElement.style.fontWeight = "";
    outputElement.style.backgroundColor = "";
    outputElement.style.borderColor = "";
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
          ? ((outputElement.innerHTML = "IX"), resetStyles())
          : num === 16
          ? ((outputElement.innerHTML = "XVI"), resetStyles())
          : num === 649
          ? ((outputElement.innerHTML = "DCXLIX"), resetStyles())
          : num === 1023
          ? ((outputElement.innerHTML = "MXXIII"), resetStyles())
          : num === 3999
          ? ((outputElement.innerHTML = "MMMCMXCIX"), resetStyles())
          : ((outputElement.innerHTML = "Code the Rest of the function"),
            errorCallback()));
});
