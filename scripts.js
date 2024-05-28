const countEl = document.getElementById('count-el');
let count = 0;

function addX() {
  count += 1;
  countEl.innerText = count;
}

function removeX() {
  count -= 1;
  countEl.innerText = count;
}

function resetValue() {
  count = 0;
  countEl.innerText = count;
  document.getElementById('start-el').value = 0;
}

function setValue() {
  let startEl = document.getElementById('start-el').valueAsNumber;
  count = startEl;
  countEl.innerText = count;
  console.log(startEl);
}
