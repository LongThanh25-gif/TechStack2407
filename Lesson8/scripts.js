// // let point = 9.0;

// // if(point >= 8.0){
// //     console.log('Thành tích: học sinh giỏi')
// // }

// // point = 7.0;

// // if(point >= 8.0){
// //     console.log('Thành tích: học sinh giỏi')
// // } else{
// //     console.log('Bạn cần cố gắng thêm để đạt thành tích học sinh giỏi')
// // }

// // // Xếp loại học lực
// // // + Giỏi (>= 8.0)
// // // + Khá (< 8.0 , >= 6.5)ư
// // // + Trung Bình (< 6.5 , >= 5.0)
// // // + Yếu (< 5.0)

// // if(point >= 8.0){
// //     console.log('Học sinh giỏi');
// // } else if( point >= 6.5){
// //     console.log('Học sinh khá')
// // } else if(point >= 5.0){
// //     console.log('Học sinh trung bình');
// // } else{
// //     console.log('Học sinh yếu');
// // }

// // Nhập vào 1 số và in ra đó là thứ mấy
// // VD: number = 2 => Thứ hai 
// // VD: number = 8 => Chủ nhật
// // VD: number = 1 => Thứ không hợp lệ 

// // switch(variable){
// //     case value1:
// //         console.log('value1');
// //     case value2:
// //         console.log('value2');
// //     default:
// //         console.log('value default');
// // }
// number = 2;
// switch(number){
//     case 2:
//         console.log('Thứ hai');
//         break; 
//     case 3:
//         console.log('Thứ ba');
//         break;
//     case 4:
//         console.log('Thứ tư');
//         break;
//     case 5: 
//         console.log('Thứ năm');
//         break;
//     case 6:
//         console.log('Thứ sáu');
//         break;
//     case 7:
//         console.log('Thứ bảy');
//         break;
//     case 8:
//         console.log('Chủ nhật');
//         break;
//     default:
//         console.log('Thứ không hợp lệ');
// }

// let age = 20;
// C1
// let message;

// if(age >= 18){
//     message = 'Người lớn'
// } else {
//     message = 'Trẻ em'
// }

// C2: toán tử 3 ngôi 
// let message = age >= 18 ? 'Người lớn'
//  : age >= 15 ? 'Trưởng thành' 
//  : 'Trẻ em'

// In ra màn hình các số từ 1 -> 1000
// for(let number = 1; number <= 1000; number = number + 1){
//     console.log(number);
// }

// Hãy in ra màn hình các số từ 1 đến 50 
// Hãy tính tổng các số từ 1 đến 50 
// let sum1 = 0; 
// for(let i = 1; i<=50; i++){
//     sum1 = sum1 + i; 
//     console.log(i);
// }
// console.log(sum1)
// Hãy in ra màn hình các số chẵn từ -10 đến 50
// Hãy tính tổng các số chẵn từ -10 đến 50
// let sum2 = 0;
// for(let i = -10; i<=50; i++){
//     if(i % 2 === 0){
//         console.log(i);
//         sum2 = sum2 + 1; 
//     }
// }

// Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100;100]
// for(let i = -100; i<=100; i++){
//     if( i % 9 === 0){
//         console.log(i);
//     }
// }

// for(let i = 1; i<=5; i++){
//     if(i === 3){
//         continue;
//         console.log('Chạy vào đây')
//     }
//     console.log(i)
// }

// let n = prompt(" Nhập giá trị cho n");
// 6! = 1*2*3*4*5*6
// Nhập vào số n. Tính giai thừa của số n.
// let factorial = 1;
// for(let i = 1; i<=n; i++){
//     factorial = factorial * i;
// }
//     console.log(factorial);

// Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.
// let a,b;
// do{
//     a = prompt("Nhập giá trị cho a (a < b)");
//     a = Number(a);
//     b = prompt("Nhập giá trị cho b (a < b)");
//     b = Number(b); 
// } while(a >= b); 

// let x = parseInt(prompt("Nhập giá trị cho x"));

// for(let number = a+1; number <b; number++){
//     if(number % x === 0){
//         console.log(number);
//         break;
//     }
// }

