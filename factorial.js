
// factorial number 

// function factorial(number){
//     let result = 1;
//     for(let i = 1; i <= number; i++){
//         result =result * i;
//     }
//     return result;
// }
// const inputNumber = 7;
// const result =  factorial(inputNumber);
// console.log(result);


// factorial in reverse way 

function factorial(number){
    let result = 1;
    for(i = number; i >= 1; i--){
        result = result * i;
    }
    return result;
}
const result =  factorial(3)
console.log(result);

