function isDivisibility(number){
    if(number%3==0&&number%5==0){
        return true;
    }else{
        return false;
    }
}
var result=isDivisibility(42);
console.log(result);
var result=isDivisibility(30);
console.log(result);