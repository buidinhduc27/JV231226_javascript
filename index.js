let a = 10;
let b = 20;
let c = "20";

//1. Toán tử so sánh
//Dấu = dùng để gán giá trị cho biến    
//Dấu == dùng để so sánh 2 giá trị (So sánh tương đối)
//Dấu === dùng để so sánh về giá trị và kiểu dữ liệu của các biến (So sánh tuyệt đối)
console.log(a > b); //false
console.log(a < b); //true
console.log(c == b); //true
console.log(c === b); //false
console.log(b >= c); //true
console.log(c >= c); //true

//2. Toán tử logic (&&, ||, !)
//Toán tử và và (&&): yêu cầu tất cả các điều kiện phải nhận true
console.log(a < b && b === c); //false

//Toán tử hoặc hoặc (||): yêu cầu chỉ cần 1 điều kiện đúng thì điều kiện đó đúng
console.log(a < b || b == c); //true

//Toán tử phủ định (!): phủ định đúng thành sai, sai thành đúng
console.log(!(a < b)); //false

//3. Toán tử gán
a = a + 10; //gán lại giá trị a
a += 20; //<=> a = a + 20
console.log("Giá trị của biến a = ", a); 

b *= 20; // <=> b = b * 20
console.log("Giá trị của biến b = ", b);
