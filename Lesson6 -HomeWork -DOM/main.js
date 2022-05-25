const inputName=document.getElementById("name");
const inputAge=document.getElementById("age");
const inputPhone=document.getElementById("phone");
const btnAdd=document.getElementById("add");
const demo = document.getElementsByClassName("demo");

let user = {}
function changeName(event){
    const{ name, value }=event.target;
    user[name] = value;
}

inputName.onchange=changeName;
inputAge.onchange=changeName;
inputPhone.onchange=changeName;

btnAdd.onclick=() =>{
    let div = document.createElement("table");
    div.innerHTML = `<td>${user?.name}</td>
                     <td>${user?.age}</td>
                     <td>${user?.phone}</td>
                     `
    
    document.body.appendChild(div)
                     
}
