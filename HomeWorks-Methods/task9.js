obj2 ={
    name:"John",
    age:20
}


function copyObj(obj={}){
    const obj1 = { ... obj}
    return obj1
}

var obj1 =  copyObj(obj2)

console.log(obj1)