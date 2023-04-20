function findColumnNumber(inputValue) {
  const alphaChars = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const inputChars = inputValue.split("");

  let result = 0;
  for (let i = 0; i < inputChars.length; i++) {
    const charValue =
      alphaChars.findIndex((x) => x === inputChars[inputChars.length - i - 1]) +
      1;
    result += charValue * Math.pow(26, i);
  }

  return result;
}

function findColumnCharacters(inputValue) {
  let result = "";
  let number = inputValue;
  while (number > 0) {
    const remainder = (number - 1) % 26;
    result = String.fromCharCode(65 + remainder) + result;
    number = Math.floor((number - 1) / 26);
  }
  return result;
}

function generateCommonExamples(commonExamples, workerFunction) {
  const commonExamplesContainer = document.getElementById("common-examples");

  commonExamples.forEach(function (commonExample) {
    const commonExampleButton = document.createElement("button");
    commonExampleButton.setAttribute("type", "button");
    commonExampleButton.setAttribute(
      "id",
      `example-button-for-${commonExample}`
    );
    commonExampleButton.setAttribute("class", "button");
    commonExampleButton.setAttribute("data-value", commonExample);
    commonExampleButton.textContent = "->";
    commonExampleButton.addEventListener("click", function (e) {
      const result = workerFunction(e.target.dataset.value);
      document.getElementById(`example-result-for-${commonExample}`).innerHTML =
        result;
    });

    const commonExampleSpan = document.createElement("span");
    commonExampleSpan.setAttribute("id", `example-result-for-${commonExample}`);

    const commonExampleParagraph = document.createElement("p");
    commonExampleParagraph.setAttribute("id", `example-for-${commonExample}`);
    commonExampleParagraph.setAttribute("class", "helper-text");
    commonExampleParagraph.innerHTML = commonExample;
    commonExampleParagraph.appendChild(commonExampleButton);
    commonExampleParagraph.appendChild(commonExampleSpan);
    commonExamplesContainer.appendChild(commonExampleParagraph);
  });
}

function generalShowResult(rule, workerFunction) {
  const columnTitleInput = document.getElementById("column-title-input");
  const inputValue = columnTitleInput.value.toUpperCase();

  if (!rule.test(inputValue)) {
    return;
  }
  const result = workerFunction(inputValue);
  const resultParagraph = document.getElementById("result");
  resultParagraph.style.display = "block";

  const resultText = resultParagraph.querySelector("#result-text");
  resultText.innerHTML = result;
}
