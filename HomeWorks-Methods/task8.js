var john={
    name:"John",
    age:20
}

function changeName(obj={}, key="", value=""){
    obj[key]=value;

}

changeName(john, "name", "bob")
changeName(john, "age", 22)


function deleteName(obj={}, key=""){
    delete obj[key]
}

deleteName(john, "age")
console.log(john)
console.log(john)