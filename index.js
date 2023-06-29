//tạo giá trị sử dụng toàn bộ bài
let numberArray = [];

// Build interface for user

function addInteger(number) {
  let inputNumber = number;

  // chuyển string thành array bằng ","
  inputNumber = inputNumber.split(",");

  // lặp array để ép về kiểu dữ liệu về number
  for (let i = 0; i < inputNumber.length; i++) {
    inputNumber[i] = +inputNumber[i];

    numberArray.push(inputNumber[i]);
  }

  document.getElementById("hello").innerHTML = numberArray;
}

// Nhập value đầu vào
function add() {
  let inputNumber = document.getElementById("input-number").value;

  addInteger(inputNumber);
}
function remove() {
  let inputNumber = document.getElementById("input-number").value;

  removeInteger(inputNumber);
}

// xoá số khỏi chuỗi
function removeInteger(number) {
  let inputNumber = number;

  if (typeof inputNumber === "string") {
    inputNumber = inputNumber.split(",");

    for (let i = 0; i < inputNumber.length; i++) {
      inputNumber[i] = +inputNumber[i];

      if (numberArray.includes(inputNumber[i])) {
        numberArray.splice(
          numberArray.lastIndexOf(inputNumber[i]),
          numberArray.lastIndexOf(inputNumber[i]) + 1
        );
      }
    }
  }
  console.log(numberArray);
  document.getElementById("hello").innerHTML = numberArray;
}

// Sum positive number

function sumInte() {
  let outputSum = 0;
  // lặp mảng cộng dồn nếu thoải điều kiện
  for (let i = 0; i < numberArray.length; i++) {
    // điều kiện số dương
    if (numberArray[i] > 0) {
      outputSum += numberArray[i];
    }
  }

  document.getElementById("output-sum").style.background = "#EAECF0";
  document.getElementById("output-sum").innerHTML = outputSum;
}

// Count positive number in array

function countInte() {
  let outputCount = 0;

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      outputCount += 1;
    }
  }

  document.getElementById("output-count").style.background = "#EAECF0";
  document.getElementById("output-count").innerHTML = outputCount;
}

// seeking min number

function seekMinNumber() {
  let outputMinNumber = numberArray[0];

  for (let i = 0; i < numberArray.length; i++) {
    // so sánh lần lượt để chọn số nhỏ nhất
    if (numberArray[i] < outputMinNumber) {
      outputMinNumber = numberArray[i];
    }
  }
  // gắn đầu ra bằng 0 nếu không có đầu vào
  if (typeof outputMinNumber === "undefined") {
    outputMinNumber = 0;
  }

  document.getElementById("output-minNUmber").style.background = "#EAECF0";
  document.getElementById("output-minNUmber").innerHTML = outputMinNumber;
}

// Seeking min positive number
// Caution: other way with no method MAth.max

function seekMinPositiveNumber() {
  // lấy giá trị lớn nhất trong mảng
  let outputMinPositiveNumber = Math.max(...numberArray);

  for (let i = 0; i < numberArray.length; i++) {
    // điều kiện dương mới được so sánh
    if (numberArray[i] > 0) {
      if (numberArray[i] - outputMinPositiveNumber < 0)
        outputMinPositiveNumber = numberArray[i];
    }
  }
  // trường hợp số lớn nhất âm thì trả ra không có
  if (outputMinPositiveNumber <= 0) {
    outputMinPositiveNumber = "Không có";
  }

  document.getElementById("output-minPositiveNumber").style.background =
    "#EAECF0";
  document.getElementById("output-minPositiveNumber").innerHTML =
    outputMinPositiveNumber;
}

//seeking last positive number in the array

function seekLastPositiveNumber() {
  let outputLastPositiveNumber = null;
  //cho chạy vòng lặp array từ cuối 
  for (let i = numberArray.length - 1; i >= 0; i--) {
    //kiểm tra điều kiện
    if (numberArray[i] > 0) {
      outputLastPositiveNumber = numberArray[i];
      break;
    }
  }
  // nếu rỗng trả ra -1
  if (outputLastPositiveNumber === null) {
    outputLastPositiveNumber = -1;
  }

  document.getElementById("output-lastPositiveNumber").style.background =
    "#EAECF0";
  document.getElementById("output-lastPositiveNumber").innerHTML =
    outputLastPositiveNumber;
}

// change position of number in array with 2 position entered

function transPositionNumber() {
  // input đầu vào. vì chỉ mục bắt đầu từ 0 nên giá trị đầu vào - 1
  let inputPosition1 = +document.getElementById("transPosition1").value - 1;
  let inputPosition2 = +document.getElementById("transPosition2").value - 1;
  let numberPosition1 = 0;
  let numberPosition2 = 0;

  // gắn thuộc tính chỉ mục đầu vô cho 2 biến
  numberPosition1 = numberArray[inputPosition1];
  numberPosition2 = numberArray[inputPosition2];
  // Điều kiện để 2 position được điền 
  if (
    typeof numberPosition1 !== "undefined" &&
    typeof numberPosition2 !== "undefined"
  ) {
    numberArray.splice(inputPosition1, 1, numberPosition2);

    numberArray.splice(inputPosition2, 1, numberPosition1);
  }

  document.getElementById("output-transPosition").style.background = "#EAECF0";
  document.getElementById("output-transPosition").innerHTML = numberArray;
}

// Arrangement number in small to big

function arrangeNumber() {
  // hàm để xác định cho phương thức sort
  function compare(a, b) {
    return a - b;
  }
  numberArray.sort(compare);
  document.getElementById("output-arrange").style.background = "#EAECF0";
  document.getElementById("output-arrange").innerHTML = numberArray;
}

// initial integer

function firstInteger() {
  let outputInteger = null;
  for (let i = 0; i < numberArray.length; i++) {
    // integer là số chia hết cho 1 và khác số 0
    if (numberArray[i] % 1 === 0 && numberArray[i] !== 0) {
      outputInteger = numberArray[i];
      break;
    }
  } 
  // không có trả về -1
  if (outputInteger === null) {
    outputInteger = -1;
  }
  document.getElementById("output-firstInteger").style.background = "#EAECF0";
  document.getElementById("output-firstInteger").innerHTML = outputInteger;
}

// Enter array to initial array. then count integer

function enterArray() {
  let inputArray = document.getElementById("enter-array").value;

  if (inputArray != "") {
    // chuyển về mảng
    inputArray = inputArray.split(",");
    // thêm vào mảng có sẵn bằng toán tử ... . Có sử dụng map để ép kiểu dữ liệu về number
    numberArray.push(
      ...inputArray.map((value, index) => {
        return +value;
      })
    );
  }
  let countInte2 = 0
  // tạo vòng lặp đếm số nguyên 
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 1 === 0) {
      countInte2 += 1
    }
    
  }

  document.getElementById("output-enterArray").style.background = "#EAECF0";
  document.getElementById("output-enterArray").innerHTML = `${numberArray} <br>
  Có ${countInte2} số nguyên`;
}

// compare positive number and negative number

function compareNumber() {
  // tạo array lọc giá trị âm
  let negativeNumber = numberArray.filter((value, index) => {
    return value < 0;
  });
    // tạo array lọc giá trị dương
  let positiveNumber = numberArray.filter((value, index) => {
    return value > 0;
  });
  document.getElementById("output-compareNumber").style.background = "#EAECF0";
  document.getElementById(
    "output-compareNumber"
  ).innerHTML = ` Có ${negativeNumber.length} số âm 
   ${negativeNumber} <br>
  Có ${positiveNumber.length} số dương
  ${positiveNumber}`;
}
