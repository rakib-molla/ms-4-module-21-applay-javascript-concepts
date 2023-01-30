
function hourToMinute(hours){
    
    const sum = hours * 60;
    return sum;
}
const inputHour = 5;
const totalSecond = hourToMinute(inputHour);
console.log(inputHour,"Hours = Total Minutes: ",totalSecond);