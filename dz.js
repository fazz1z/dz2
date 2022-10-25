// 1
let number = +prompt("vvedit chislo");
if (((number % 5 == 0) && (number % 100 !=0)) || number % 15 == 0){
alert("number is good");
}
else {
    alert("number is bad");
}
// 2
let numberr = +prompt("Введіть число");
let numberr2 =  +prompt("Введіть число 2");
let numberr3 =  +prompt("Введіть число 3");

console.log(numberr);
console.log(numberr2);
console.log(numberr3);

let sum = 0;
if (numberr < 0){
    sum += numberr;
}
if (numberr2 < 0){
    sum += numberr2;
}
if (numberr3 < 0){
    sum += numberr3;
}
console.log("summa:" + sum);