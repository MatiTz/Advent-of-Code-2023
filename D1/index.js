import fs from "fs";
function partOne(fName) {
  const lines = fs.readFileSync(fName, "utf-8").trim().split("\r\n");
  const values = lines.map((line) => {
    let fDigit = line.split("").find((v) => !Number.isNaN(Number(v)));
    let lDigit = line.split("").findLast((v) => !Number.isNaN(Number(v)));
    return Number(fDigit + lDigit);
  });
  console.log(values);
  return values.reduce((s, v) => s + v);
}
//console.log(partOne("./ex.txt"));
console.log(partOne("./input.txt"));

// PART 2

const mappings = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
