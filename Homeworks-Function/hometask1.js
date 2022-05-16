function horse(x1,y1,x2,y2){
    var x1;
    var y1;
    var x2;
    var y2;
    var a;
    var b;
    a=Math.abs(x1-x2);
    b=Math.abs(y1-y2);

    if(a==1 && b==2 || b==1 && a==2){
        console.log("Yes")
    }else {
        console.log("No")
    }
}

horse(1,1,3,2);
horse(1,1,3,3);