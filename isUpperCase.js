function isUpperCase(alphabet){
   captial="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   small="abcdefghijklmnopqrstuvwxyz";
   for(var i=0;i<captial.length;i++){
    if(captial[i]==alphabet){
        return true;
    }else if(small[i]==alphabet){
        return false;
    }
   }
   return "enter a sting not number??? "
}
var result=isUpperCase('P');
console.log(result);