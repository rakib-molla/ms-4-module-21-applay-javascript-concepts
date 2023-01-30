
function milesToKilometer(miles){
    const kilometer = miles* 1.609;
    return kilometer;
}
const input = 2;
const results = milesToKilometer(input);
console.log( "Distance ",results, "miles");

// kg to gram 
function kgTOGram(kg){
    const gram = kg * 1000;
    return gram;
}
const wight = 2000;
const netGram = kgTOGram(wight);
console.log(netGram, "gram");
