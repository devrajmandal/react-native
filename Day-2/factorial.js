var num = 5;
var fact = 1;
if(num == 0 || num == 1){
    console.log(fact);
}
else{
    for(i=1;i<=num;i++){
        fact *= i;
    }
    console.log(fact);
}
