window.addEventListener("DOMContentLoaded", init);

function init() {
  const columnTitleInput = document.getElementById("column-title-input");
  const goButton = document.getElementById("go-button");
  const resultParagraph = document.getElementById("result");

  columnTitleInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      showResult();
    }
  });

  goButton.addEventListener("click", function () {
    showResult();
  });

  resultParagraph.style.display = "none";

  generateCommonExamplesPart1();
}

function showResult() {
  generalShowResult(/[a-z]/i, findColumnNumber);
}

function generateCommonExamplesPart1() {
  const commonExamples = ["A", "B", "C", "Z", "AA", "AB"];
  generateCommonExamples(commonExamples, findColumnNumber);
}
