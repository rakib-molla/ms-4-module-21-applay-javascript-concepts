

// factorial using while loop reverse way 
function factorial(number){
    let i = number;
    let result = 1;
    while(i >= 1){
        result = result * i;
        i--;
    }
    return result;
}
const numberInp = 7;
const fact = factorial(numberInp);
console.log(fact);