
// function isLeapYear(year){
//     const reminder = year % 4;
//     if( reminder == 0 ){
//         return true;
//     }else{
//         return false;
//     }
// }
//  const inputYear = isLeapYear(2023);
//  console.log(inputYear);


// function isLeapYear(year){
//     const reminder = year % 4;
//     if( reminder == 0 ){
//         return true;
//     }
//         return false;
// }
//  const inputYear = isLeapYear(2023);
//  console.log(inputYear);


// write a function findLeapYear() that will take the array [2023,2024,2025,2028,2030] as the input parameter and will check if each year is a leap year. if a year is a leap year insert that year in a new array, return the new array new and print the result.
const years = [2023,2024,2025,2028,2030];
const totalLeapYears = [];
function isLeapYear(year){
    for( let i = 0; i < years.length; i++){
        if( years[i] % 2 == 0){
            totalLeapYears.push(year[i]);
        }
    }
    return year;
}
isLeapYear(years);
console.log(totalLeapYears);
