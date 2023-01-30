
// write a function findOddSum() that will take the array[5,7,8,10,45,30] as the input parameter and will return the sum of the odd numbers.

// function getSum(numbers) {
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[i] ;
//         sum = sum + element;
//         console.log(index,element,sum);
//     }
//     return sum;
// }
// const myNumbers = [12,64,6,45,89,74,2,5,4,5,87,77];
// getSum(myNumbers);

 
// function getSumOfArray(numbers) {
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index] ;
//         sum = sum + element;
//         console.log(index, element,sum)
//     }
//     return sum;
// }
// let sum = 0;
// const myNumbers = [12,65,45,78,32,45,91];
// getSumOfArray(myNumbers);


function getOddNumberArray(numbers){
    const oddNumbers = [];
    for( let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if( element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const myNumbers = [12,64,6,45,89,74,2,5,4,5,87,77];
const oddNumbers = getOddNumberArray(myNumbers);
console.log(oddNumbers);