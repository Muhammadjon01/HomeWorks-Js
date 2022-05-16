function numberOfEqual(a,b,c){
    if(a==b && a==c){
        console.log(3)
    }else if(a==b || b==c || a==c){
        console.log(2)
    }else{
        console.log(0)
    }
}

numberOfEqual(1,2,2)
numberOfEqual(2,2,2)
numberOfEqual(1,2,3)