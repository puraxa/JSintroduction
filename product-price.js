const pdvPercent = 0.17;

let productPrice = 145.34;
let commissionPercent = 0.34;
let commission;
let finalProductPrice;

finalProductPrice = productPrice + (productPrice*pdvPercent);
commission = finalProductPrice*commissionPercent;

console.log(finalProductPrice);
console.log(commission);