import sort from "./sort";

const N = 100;
const bigArray = Array.from({ length: N }, () => Math.round(Math.random() * N));
console.log("Merge sort: %o", sort(bigArray));