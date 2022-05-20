function checkNum(){
    var arr=[1,-3,4,-2,1]
    //var arr=[-1,-2,3,-3]
    var cnt=0
    var arr1=arr.filter(function(elem, index) {
        
        if((arr[index]>0 && arr[index+1]>0) || (arr[index]<0 && arr[index+1]<0)){
            cnt++
        } 
        
    })
    if(cnt>0){
        console.log("yes")
    }else{
        console.log("No")
    }
}

checkNum()
