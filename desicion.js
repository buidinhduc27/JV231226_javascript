//Mệnh đề if
// let a = +(prompt("Nhập giá trị a = ")); // kiểu giữ liệu của prompt là string
// Ép kiểu từ string sang number
// Cách 1: parseInt(string)
// Cách 2: Dùng đối tượng Number
// Cách 3: Dùng dấu cộng trc chuỗi cần ép
// console.log("Giá trị của số a = ", typeof a);
// let age = 20;
// if (a < 20){
//     //Statements
//     console.log("Điều kiện đúng");
// }

// consolog, alert....=> built in function

//Mệnh đề if else
// if (age > 18){
//     alert("Đủ điều kiện lái xe");
// }
// else{
//     alert("Chưa đủ điều kiện lái xe");
// }

// let salary = +prompt("Nhập lương của bạn: ");

// if(salary > 0 && salary < 10) {
//     console.log("Thuế thu nhập cá nhân", 0);
// }else if(salary > 0 && salary < 10){
//     console.log("Thuế thu nhập cá nhân", salary*0.05);
// }else if(salary > 0 && salary < 10){
//     console.log("Thuế thu nhập cá nhân", salary*0.1);
// }else if(salary > 0 && salary < 10){
//     console.log("Thuế thu nhập cá nhân", salary*0.15);
// }else(salary > 100)
//     console.log("Thuế thu nhập cá nhân", salary*2);

//Cấu trúc điều khiển Switch-case
// let month = + prompt("Mời bạn nhập tháng: ")
// // Sử dụng toán tử === để ktr điều kiện với các case
// switch (month) {
//     case 1:
//         console.log("Đây là tháng 1");
//         break;
//     case 2: 
//         console.log("Đây là tháng 2");
//         break;
//     case 3: 
//         console.log("Đây là tháng 3");
//         break;
//     default:
//         console.log("Tháng nhập vào không hợp lệ");
//         break;
// }

//Sự khác nhau giữa if-else và switch-case
//if-else: sử dụng khi điều kiện năm trong 1 khoảng cần kiểm tra
//switch-case: sử dụng khi điều kiện được xác định từ trc

//Kiểu dữ liệu dùng trong if để so sánh là kiểu boolean (true false)
//Bên trong JS, ngoại trừ 6 giá trị: chuỗi rỗng(""), false, 0, NaN, underfined null  nhận giá trị false
//Còn lại tất cả nhận true
// if(0){
//     console.log("Điều kiện đúng");
// }else
//     console.log("Điều kiện sai");

//Toán tử 3 ngôi
// let number = 10;
// if(number > 5){
//     console.log("Điều kiện đúng");
// }else
//     console.log("Điều kiện sai");

// number > 5 ? console.log("Điều kiện đúng") : console.log("Điều kiện sai");

let genderCode = 1;
//0:nam 1:nữ 2:khác
genderCode === 0 ? console.log("Đây là nam") : genderCode === 1 ? console.log("Đây là nữ") : console.log("Giới tính khác");