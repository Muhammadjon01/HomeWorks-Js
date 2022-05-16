var k=3602;
var h;
var m;
var s;
var day;

h=Math.floor(k/3600);
m=Math.floor(k%3600/60);
s=Math.floor(k%60);

day=h%24;

console.log(`${day} : ${m} : ${s}`);