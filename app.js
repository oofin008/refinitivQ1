console.log("hello world");

function isPrime(num) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
  return num > 1;
}

/**
 * Helper function for isFibonacci function
 * @param {number} num input number to check.
 */
function isPerfectSquare(num) {
  const s = Math.floor(Math.sqrt(num));
  return Math.pow(s,2) == num;
}

function isFibonacci(num) {
  //5n^2
  const N = (5 * Math.pow(num, 2));
  return isPerfectSquare(N+4) || isPerfectSquare(N-4);
}

/** Main Function */
function calOnChange(e) {
  const myInputVal = document.getElementById('my-input').value;
  const mySelectVal = document.getElementById('my-select').value;
  const myResult = document.getElementById('my-result');

  if (myInputVal === undefined || myInputVal === null || myInputVal === "") {
    return;
  }

  if (mySelectVal === "isPrime") {
    const tmp_num = parseInt(myInputVal)
    const result = isPrime(tmp_num);
    console.log(result);
    myResult.innerText = result;
    return;
  }

  if (mySelectVal === "isFibonacci") {
    const tmp_num = parseInt(myInputVal)
    const result = isFibonacci(tmp_num);
    console.log(result);
    myResult.innerText = result;
    return;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("my-input").addEventListener("keypress", function (evt) {
      //block other input
      if (
        (evt.which != 8 && evt.which != 0 && evt.which < 45 ) ||
        evt.which > 57
      ) {
        evt.preventDefault();
      }
    });
  document.getElementById("my-input").addEventListener("change", function (e) {
    //round number to integer
    //change negative number to 1
    if (e.target.value) {
      let tmp_num = parseFloat(e.target.value);
      if(tmp_num < 0) {
        tmp_num = 1;
      }
      tmp_num = Math.round(tmp_num);
      e.target.value = tmp_num;
    }
  });

  document.addEventListener("change", calOnChange);
});
