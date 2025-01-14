import sort from "./sort";

const parseNumbers = (input: string): number[] =>
  input.split(",").map(parseInt);

const printNumbers = (input: number[]): string =>
    input.map(String).join(", ");

const app = document.getElementById("app")!;

const inputSection = document.createElement("section");
const inputHeader = document.createElement("h1");
const input = document.createElement("textarea");

inputHeader.textContent = "Input";
inputSection.appendChild(inputHeader);
inputSection.appendChild(input);

const button = document.createElement("button");
button.textContent = "Sort";
button.addEventListener("click", () => {
  const unsorted = parseNumbers(input.value);
  const sorted = sort(unsorted);

  output.value = printNumbers(sorted);
});

const outputSection = document.createElement("section");
const outputHeader = document.createElement("h1");
const output = document.createElement("textarea");

outputHeader.textContent = "Output";
outputSection.appendChild(outputHeader);
outputSection.appendChild(output);

app.appendChild(inputSection);
app.appendChild(outputSection);
app.appendChild(button);

