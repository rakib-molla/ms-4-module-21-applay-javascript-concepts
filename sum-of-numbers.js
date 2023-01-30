
// 1+2+3+4+5+6+7 = find all sum 

function sumOfNumbers(number){
    let sum = 0;
    for( i = 0; i <= number; i++){
        sum = sum + i; 
        console.log(sum);
    }
    return sum;
}
sumOfNumbers(5);