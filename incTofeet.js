
// const myInches = 12;
// const myFeet = myInches / 12;
// // console.log(myFeet);

// const dataInch = 144;
// const dadaFeet = dataInch / 12;
// // console.log('dada feet: ', dadaFeet);

// const dadiInch = 60;
// const dadiFeet = dadiInch /12 ;
// console.log("dadi feet:",dadiFeet);

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadaInch = 144;
const dadaFeet = inchToFeet(dadaInch);
console.log(dadaFeet);