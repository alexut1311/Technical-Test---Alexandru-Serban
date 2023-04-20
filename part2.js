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

  generateCommonExamplesPart2();
}

function showResult() {
  generalShowResult(/[0-9]/i, findColumnCharacters);
}

function generateCommonExamplesPart2() {
  const commonExamples = ["26", "51", "52", "80", "676", "702", "705"];
  generateCommonExamples(commonExamples, findColumnCharacters);
}
