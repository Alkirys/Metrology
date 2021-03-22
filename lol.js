import arr from "./kek.js";

const p = 1 / arr.length;
const T = 2.045229642132703;

function mathRel() {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i] * p;
  }
  return res;
}

function Rel() {
  let sum = 0;
  const math = mathRel();
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i] - math, 2);
  }
  sum = (1 / (arr.length - 1)) * sum;
  sum = Math.sqrt(sum);
  return sum;
}

const delta = () => {
  return T * Rel();
};

const rez = () => {
    const d = delta();
    let f = mathRel() - d;
    let s = mathRel() + d;
    let kek = s - f;
    console.log("kek", kek)
    return {
        rez: (mathRel() + d - mathRel() - d).toString(),
        min: mathRel() - d,
        max: mathRel() + d,
    }
};

console.log("delta: ", delta());
console.log("Math: ", Rel());
console.log("Result: ", rez());
