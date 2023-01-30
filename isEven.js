
function isEven(number){
    const reminder = number % 2;
    if( reminder == 0 ){
        return true;
    }else{
        return false;
    }
}
const givenNumber = isEven(2);
console.log(givenNumber);
