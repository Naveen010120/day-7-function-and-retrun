function isLeapYear(year){
    if(year%4==0){
        return true;
    }else{
        return false;
    }
}
var result=isLeapYear(2024);
console.log(result);
var result=isLeapYear(1999);
console.log(result);