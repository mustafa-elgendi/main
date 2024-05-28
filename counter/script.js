let countEl = document.getElementById("count-el");
let setEl = document.getElementById("set-el");
let count = 0;

function add() {
  count += 1;
  countEl.innerText = count;
}
function remove() {
  count -= 1;
  countEl.innerText = count;
}
function reset() {
  count = 0;
  countEl.innerText = count;
}
function set() {
  count = document.getElementById("set-el").valueAsNumber;
  countEl.innerText = count;
  setEl.value = 0;
}
