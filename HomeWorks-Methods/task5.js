function checkNum(){
    var arr=[1,5,2,3,1,4,2]
    var cnt=0
    var arr1=arr.filter(function(elem, index) {
        if((arr[index]>arr[index-1]) && (arr[index]>arr[index+1])){
            cnt++
        }
        
    })
    console.log(cnt)
    
}

checkNum()