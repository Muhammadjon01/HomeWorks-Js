function sumOfNum(){
    var cnt=0;
    var arr=[1,2,3,-1,-4]
    var arr1=arr.filter(function(elem){
        if(elem>0){
            cnt++
        }
    })
    console.log(cnt)
}

sumOfNum()