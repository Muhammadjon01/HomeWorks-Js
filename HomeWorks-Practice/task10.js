function checkNum(){
    var arr=[1,2,3,4,5]
    var cnt=0;
    var arr1=arr.filter(function(elem,index){
        if(arr[index]<arr[index+1]){
            cnt++
        }
    })
    console.log(cnt)
}

checkNum()