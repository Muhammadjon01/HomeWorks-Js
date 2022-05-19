function multiplyNum(x){
    var cnt=0;
    for(let i=1; i<=x; i++){
        if(x%i==0){
           cnt++;
        }
    }
    console.log(cnt)
}

multiplyNum(64)