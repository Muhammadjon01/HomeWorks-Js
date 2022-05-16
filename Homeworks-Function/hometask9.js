function evenAndOddNum(a,b,c){
    if((a%2==0 && (b%2!=0 || c%2!=0)) || (b%2==0 && (a%2!=0 || c%2!=0)) ||
     (c%2==0 && (a%2!=0 || b%2!=0))){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

evenAndOddNum(7,7,7)
evenAndOddNum(1,2,3)