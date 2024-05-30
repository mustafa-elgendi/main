let vatEl = document.getElementById("vat-el");
let numInEl = document.getElementById("numIn-el");
let numOutEl = document.getElementById("numOut-el");
const numVatBtnEl = document.getElementById("numVatBtn-el");
const vatNumBtnEl = document.getElementById("vatNumBtn-el");

// let num = 0;
// let vat = 0;

numVatBtnEl.addEventListener("click", function () {
  num = numInEl.valueAsNumber;
  vat = vatEl.valueAsNumber;
  num += (num * vat) / 100;
  numOutEl.textContent = num.toFixed(2);
});

vatNumBtnEl.addEventListener("click", function () {
  num = numInEl.valueAsNumber;
  vat = vatEl.valueAsNumber;
  num = (num / (vat + 100)) * 100;
  numOutEl.textContent = num.toFixed(2);
});
