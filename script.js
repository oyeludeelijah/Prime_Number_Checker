const result = document.getElementById("result");

const isPrime = function (num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const checkPrime = function () {
  const num = document.getElementById("numberInput").value;
  const result = isPrime(num);
  document.getElementById("result").innerText = result
    ? num + " is a prime number."
    : num + " is not a prime number.";
};
