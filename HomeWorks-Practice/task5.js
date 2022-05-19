function plus(){
    var arr=[4,5,3,4,2,3]
    var arr1=arr.filter(function(elem, index){
        if(index%2==0){
            console.log(elem)
        }
    })
}

plus()