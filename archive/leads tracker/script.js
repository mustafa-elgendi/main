let myLeads = [];

const elInput = document.getElementById("el-input");
const btnInput = document.getElementById("el-btnInput");
const leadsList = document.getElementById("el-leadsList");

let localLeads = JSON.parse(localStorage.getItem("myLeads"))

console.log(localLeads)










btnInput.addEventListener("click", function () {
  myLeads.push(elInput.value);
  elInput.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  
  render();
  

  
});

function render() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li><a href="${myLeads[i]}" target="_blank"> ${myLeads[i]}</a></li>`;
  }

  leadsList.innerHTML = listItems;
}

localStorage.clear();
console.log(localStorage.getItem("b"));
