// Bài 11
// Trò chơi đoán số :Trò chơi đoán số: Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20. 
// Người dùng nhập vào 1 số answer. 
// Nếu answer bằng correct → in ra “Đoán đúng”. 
// Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer. 
// Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.

// Bước 1: Tạo 1 số ngẫu nhiên trong khoảng từ 1 - 20. VD: 5,9 
// Bước 2: Cho người dùng nhập đáp án, số answer 
//         + TH1: Nếu số người dùng nhập === số sinh ra , số lần chơi <= 5
//         => Thắng cuộc => Đoán đúng
//         + TH2: Nếu số người dùng nhập !== số answer , số lần chơi < 5 
//         => Đoán sai 
//         + TH3: Nếu số người dùng nhập !== số answer, số lần chơi == 5
//         => Đoán sai => Kết thúc chương trình

// let numberRandom = 4;
// numberRandom = Math.floor(numberRandom);

// let countGuess = 5; // Tượng trưng cho số lần chơi 
// let numberGuess;

// for(let i = 1; i<=countGuess; i++){
//     numberGuess = prompt("Nhập đáp án");
//     numberGuess = Number(numberGuess);

//     if(numberGuess === numberRandom){
//         alert("Đoán đúng");
//         break;
//     } else {
//         alert("Đoán sai")
//     }

//     if(i === countGuess){
//         alert("Trò chơi kết thúc")
//     }
// }

// Bài 17
// Tạo 1 biến a có giá trị là 1 số tự nhiên ngẫu nhiên trong [5, 10].
// Hãy nhập vào số n cho đến khi giá trị của n bằng a

// let a = Math.floor(Math.random() * 5) + 5;
// let n; 

// do {
//     n = prompt("Nhập số n (số từ 5 đến 10");
//     n = Number(n);
// } while ( n !== a);

// Mảng
// Cách 1:
// const arr1 = []; // Mảng rỗng 
// const cars = ['Vinfast','BMW', 'Audi', 'Volvo']
// // console.log(arr1);
// console.log(cars);
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]); 
// cars[2] = 'Toyota';
// console.log(cars);

// // Cách 2
// const arr2 = new Array();
// const numbers = new Array(3,6,2,1,7);
// console.log(numbers);

// Duyệt mảng

const cars = ['Vinfast', 'BMW', 'Audi', 'Volvo', ];
// Dùng splice để xóa
// console.log(cars);
// cars.splice(0,1);
// console.log(cars);

// Dùng splice để thêm phần tử vào trong mảng
// ['Vinfast', 'BMW', 'Toyota', 'Audi', 'Volvo', ];
console.log(cars);
cars.splice(9,0, 'Toyota', 'Huyndai')
console.log(cars);
// for(let i = 0; i<cars.length; i++){
//     console.log(i);
//     console.log(cars[i])
// }

// console.log('--------------');
// for(let car of cars){
//     console.log(car);
// }