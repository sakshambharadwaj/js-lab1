// Section 15 exercise: a counter, three ways.
// Run it:  npm run web   → open http://localhost:5500/web/counter.html
// Follow section 15 of the lab doc: stage 1 → 2 → 3 → 4.
import { useState } from "../src/s15-state.js";

const countEl = document.querySelector("#count");
const parityEl = document.querySelector("#parity");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const reset = document.querySelector("#reset");
const stepInput = document.querySelector("#step");

function render() {
  const count = getCount();
  const step = getStep();
  countEl.textContent = count;
  parityEl.textContent = count % 2 === 0 ? "even" : "odd";
  dec.disabled = count === 0;
  document.title = `Count: ${count}`;
  if (Number(stepInput.value) !== step) {
    stepInput.value = String(step);
  }
}

const [getCount, setCount] = useState(0, render);
const [getStep, setStep] = useState(1, render);

inc.addEventListener("click", () => {
  setCount((c) => c + getStep());
});

dec.addEventListener("click", () => {
  setCount((c) => Math.max(0, c - getStep()));
});

reset.addEventListener("click", () => {
  setCount(0);
});

stepInput.addEventListener("input", () => {
  const n = Number(stepInput.value);
  setStep(Number.isFinite(n) && n > 0 ? n : 1);
});

render();
