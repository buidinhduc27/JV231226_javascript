let a = +prompt("Nhập vào số a: ")
let b = +prompt("Nhập vào số b: ")
let c = +prompt("Nhập vào số c: ")
a > b && b > c ? console.log(c, b, a) :
a > c && c > b ? console.log(b, c, a) :
b > a && a > c ? console.log(c, a, b) :
b > c && c > a ? console.log(a, c, b) :
c > a && a > b ? console.log(b, a, c) :
console.log(a, b, c);