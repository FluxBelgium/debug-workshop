import sort from "./sort";

const parseNumbers = (input: string): number[] =>
  input.split(",").map(parseFloat);

const printNumbers = (input: number[]): string =>
    input.map(String).join(", ");

const app = document.getElementById("app")!;

const input = document.createElement("textarea");

const button = document.createElement("button");
button.textContent = "Sort";
button.addEventListener("click", () => {
  const unsorted = parseNumbers(input.value);
  const sorted = sort(unsorted);

  output.textContent = printNumbers(sorted);
});

const output = document.createElement("textarea");

app.appendChild(input);
app.appendChild(button);
app.appendChild(output);
