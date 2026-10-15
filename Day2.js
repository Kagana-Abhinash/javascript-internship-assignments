let bill=Number(prompt("Enter the bill amount:"));
let tipPercentage=Number(prompt("Enter the tip percentage:"));
let tip=bill*tipPercentage/100;
let total=bill;
total+=tip;
console.log("subtotal : $"+bill);
console.log("tipPercentage : "+tipPercentage+"%");
console.log("calculated tip : $"+tip);
console.log("total Amount to pay: $"+total);
