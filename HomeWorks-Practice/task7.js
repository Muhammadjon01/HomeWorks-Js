function evenNum(){
    var arr=[1,2,3,4,5]
    var arr1=arr.filter(function(elem){
        if(elem%2==0){
            console.log(elem)
        }
    })
}

evenNum()