function maxNum(){
    let arr=[1,1,3,7,1,7,3]
    let max=0
    arr.forEach((elem) => {
        if(elem>max){
            max=elem
        }   
    });
    console.log(max) 
}

maxNum()

// OR
let arr1=[1,2,3,20,30,40]
console.log(Math.max.apply(null,arr1))