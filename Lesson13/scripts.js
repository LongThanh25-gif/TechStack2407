// Lưu trữ thông tin trên local storage(lưu trữ vô hạn)
// Cách 1: lưu trữ thông qua hàm setItem
// localStorage.setItem('number', 200);
// Cách 2: lưu trữ theo kiểu Object
// localStorage['pi'] = 3.14; 

// Lấy thông tin trên local storage
// Cách 1
// const number = localStorage.getItem('number');
// Cách 2
// const pi = localStorage['pi'];

// console.log(number);
// console.log(pi);

// Xóa thông tin trên local storage 
// Cách 1: xóa chỉ định
// localStorage.removeItem('number');
// Cách 2: xóa toàn bộ 
// localStorage.clear(); 

// Lưu trữ thông tin trên session storage 
// Khác local storage ở chỗ lưu trữ trong 1 phiên làm vịehec


// Cookie 
// const valuesCookie = document.cookie;
// console.log(valuesCookie); 

// function getValueCookie(name){
//     const arr = valuesCookie.split(';');
//     const values = [];
//     for (let element of arr){
//         console.log(element.trim());
//         if (element.trim().includes(name)) {
//             const result = element.trim().split('=');
//             return result[1];
//         }
//     }
// }

// console.log(getValueCookie('username'));

// const number = 10;
// console.log('number: ', number);
// window.number = 10


