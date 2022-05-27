const inputName = document.getElementById("name");
const inputAge = document.getElementById("age");
const inputPhone = document.getElementById("phone");
const tBody = document.getElementsByClassName("tbody")[0];
const btnAdd = document.getElementById("add");
const demo = document.getElementsByClassName("demo");
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

function onClose() {
  modal.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
span.onclick = onClose;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let id = 0;

btnAdd.onclick = () => {
  id++;
  let tr = document.createElement("tr");
  let tdID = document.createElement("td");
  tdID.innerHTML = id;
  let tdName = document.createElement("td");
  tdName.innerHTML = inputName.value;
  let tdAge = document.createElement("td");
  tdAge.innerHTML = inputAge.value;
  let tdPhone = document.createElement("td");
  tdPhone.innerHTML = inputPhone.value;

  let tdDelete = document.createElement("td");
  let btnDelete = document.createElement("button");
  btnDelete.textContent = "del";

  btnDelete.onclick = function () {
    tBody.removeChild(tr);
  };
  tdDelete.appendChild(btnDelete);
  tr.appendChild(tdID);
  tr.appendChild(tdName);
  tr.appendChild(tdAge);
  tr.appendChild(tdPhone);
  tr.appendChild(tdDelete);
  tBody.appendChild(tr);
  reset();
  onClose();
};

function reset() {
  inputName.value = "";
  inputAge.value = "";
  inputPhone.value = "";
}
