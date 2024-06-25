let M = [];
let n;
// Nhập số phần tử của mảng
while (true) {
  n = Number(
    prompt(`
Mời nhập vào số phần tử của mảng.
Lưu ý n phải là số nguyên lớn hơn 0!        
`)
  );

  // Kiểm tra n
  if (Number.isInteger(n) && n > 0) {
    break;
    //Thoát lặp khi n đúng với điều kiện
  }
}

// Nhập các phần tử của mảng
for (let i = 0; i < n; i++) {
  let input = Number(prompt(`Nhập vào phần tử thứ : ${i + 1} `));
  M.push(input);
}

console.log("Mảng ban đầu:", M);

// Hàm hoán đổi giá trị của ba số a, b, c
function swapThreeValues(a, b, c) {
  // Hoán đổi giá trị
  let temp = a;
  a = b;
  b = c;
  c = temp;
  return [a, b, c];
}

// Ví dụ: hoán đổi giá trị của 3 phần tử đầu tiên trong mảng (nếu có)
if (M.length >= 3) {
  [M[0], M[1], M[2]] = swapThreeValues(M[0], M[1], M[2]);
}

console.log("Mảng sau khi hoán đổi 3 phần tử đầu tiên:", M);
