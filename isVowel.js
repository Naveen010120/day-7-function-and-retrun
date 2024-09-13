function isVowel(alphabet){
    vow="aeiouAEIOU";
    for(var i=0;i<vow.length;i++){
      if(vow[i]==alphabet){
        return true;
      }
    }
    return false;
}
var result=isVowel('A');
console.log(result);