function Queen(x1,y1,x2,y2) {
    var x1;
    var y1;
    var x2; 
    var x2;

    if(Math.abs(x1-x2)==Math.abs(y1-y2) || (x1==x2 || y1==y2)){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

Queen(1,1,8,1)
Queen(3,2,8,3)