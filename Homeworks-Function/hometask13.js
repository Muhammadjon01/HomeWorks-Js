function checkNumber(x,d){
    var cnt=0;
    while(x!=0){

        if(x%10==d){
            cnt++;
        }

        x=Math.floor(x/10);
    }

    console.log(cnt)
}

checkNumber(1333, 3)
