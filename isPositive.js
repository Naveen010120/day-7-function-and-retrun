function isPositive(number){
    if(number>0){
      return true;  
    }else if(number<0){
        return false;
    }else if(number==0){
        return "either positive nor negative";
    }else{
        return "check the number you have entered it should be a Number"
    }
}
var result=isPositive(-10);
console.log(result);