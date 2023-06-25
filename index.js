let numberArray = [];

// Build interface for user

function addInteger(number) {
  let inputNumber = number;

  inputNumber = inputNumber.split(",");
  for (let i = 0; i < inputNumber.length; i++) {
    inputNumber[i] = +inputNumber[i];

    numberArray.push(inputNumber[i]);
  }

  document.getElementById("hello").innerHTML = numberArray;
}

function add() {
  let inputNumber = document.getElementById("input-number").value;

  addInteger(inputNumber);
}
function remove() {
  let inputNumber = document.getElementById("input-number").value;

  removeInteger(inputNumber);
}

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

  for (let i = 0; i < numberArray.length; i++) {
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
    if (numberArray[i] < outputMinNumber) {
      outputMinNumber = numberArray[i];
    }
  }

  if (typeof outputMinNumber === "undefined") {
    outputMinNumber = 0;
  }

  document.getElementById("output-minNUmber").style.background = "#EAECF0";
  document.getElementById("output-minNUmber").innerHTML = outputMinNumber;
}

// Seeking min positive number
// Caution: other way with no method MAth.max

function seekMinPositiveNumber() {
  let outputMinPositiveNumber = Math.max(...numberArray);

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      if (numberArray[i] - outputMinPositiveNumber < 0)
        outputMinPositiveNumber = numberArray[i];
    }
  }

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
  let outputLastPositiveNumber = 0;

  for (let i = numberArray.length - 1; i >= 0; i--) {
    if (numberArray[i] > 0) {
      outputLastPositiveNumber = numberArray[i];
      break;
    }

  }

  if (outputLastPositiveNumber === 0) {
    outputLastPositiveNumber = -1;
  }

  document.getElementById("output-lastPositiveNumber").style.background =
    "#EAECF0";
  document.getElementById("output-lastPositiveNumber").innerHTML =
    outputLastPositiveNumber;
}

// change position of number in array with 2 position entered

function transPositionNumber() {
  let inputPosition1 = +document.getElementById("transPosition1").value - 1;
  let inputPosition2 = +document.getElementById("transPosition2").value - 1;
  let numberPosition1 = 0;
  let numberPosition2 = 0;

  numberPosition1 = numberArray[inputPosition1];
  numberPosition2 = numberArray[inputPosition2];
  console.log(numberPosition1);
  console.log(numberPosition2);

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
  function compare(a, b) {
    return a - b;
  }
  numberArray.sort(compare);
  document.getElementById("output-arrange").style.background = "#EAECF0";
  document.getElementById("output-arrange").innerHTML = numberArray;
}

// initial integer

function firstInteger() {
  let outputInteger = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 1 === 0 && numberArray[i] !== 0) {
      outputInteger = numberArray[i];
      break;
    }
    console.log("g");
  }
  if (outputInteger === 0) {
    outputInteger = -1;
  }
  document.getElementById("output-firstInteger").style.background = "#EAECF0";
  document.getElementById("output-firstInteger").innerHTML = outputInteger;
}

// Enter array inti initial array

function enterArray() {
  let inputArray = document.getElementById("enter-array").value;

  if (inputArray  != "") {
  inputArray = inputArray.split(",");
  numberArray.push(
    ...inputArray.map((value, index) => {
      return +value;
    })
  );
  }


  document.getElementById("output-enterArray").style.background = "#EAECF0";
  document.getElementById("output-enterArray").innerHTML = numberArray;
  console.log(numberArray);
}

// compare positive number and negative number

function compareNumber() {
  let negativeNumber = numberArray.filter((value, index) => {
    return value < 0;
  });
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
