var arr=[1,1,3,7,1,7,,3]
let newArr=[]
for(let i=0; i<arr.length; i++){
    if(newArr.includes(arr[i])){
        continue;
    }else {
        newArr.push(arr[i])
    }
}

console.log(newArr)