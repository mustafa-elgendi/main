let vatEl = document.getElementById("vat-el");
let numInEl = document.getElementById("numIn-el");
let yEl = document.getElementById("y-el");
let nEl = document.getElementById("n-el");
let numOutEl = document.getElementById("numOut-el");
const submitBtnEl = document.getElementById("submitBtn-el");
submitBtnEl.addEventListener("click", function () {
  if (numInEl.valueAsNumber === 0 || isNaN(numInEl.valueAsNumber)) {
    numOutEl.innerHTML = `<p class="error">قم بإدخال المبلغ</p>`;
  } else if (vatEl.valueAsNumber === 0 || isNaN(vatEl.valueAsNumber)) {
    numOutEl.innerHTML = `<p class="error">قم بإدخال نسبة الضريبة</p>`;
  } else {
    if (document.querySelector('input[name="yn"]:checked').value === "n") {
      num = numInEl.valueAsNumber;
      vat = vatEl.valueAsNumber;
      num += (num * vat) / 100;
      numOutEl.innerHTML = `
        <p class="result">المبلغ شامل ضريبة القيمة المضافة </p><span>${num.toFixed(
          2
        )}</span>`;
    } else if (
      document.querySelector('input[name="yn"]:checked').value === "y"
    ) {
      num = numInEl.valueAsNumber;
      vat = vatEl.valueAsNumber;
      num = (num / (vat + 100)) * 100;
      numOutEl.innerHTML = `
      <p class="result">أصل المبلغ المحسوب عليه الضريبة </p><span>${num.toFixed(
        2
      )}</span>`;
    }
  }
});
