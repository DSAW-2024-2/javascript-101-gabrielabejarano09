// Sum of Two Numbers
function sum(a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    return a + b;
  }
  console.log("Los datos de entrada no son adecuados");
}

// Factorial of a Number
function factorial(n) {
  let f = 1;
  if (typeof n == 'number') {
    for (let i = n; i > 0; i--) {
      f = f * i;
    }
    return f;
  }
  console.log("Los datos de entrada no son adecuados");
}

// Find the Largest Number
function findLargest(arr) {
  let largest = arr[0];

  for (let num of arr) {
    if (typeof num !== 'number') {
      console.log("Los datos de entrada no son adecuados");
      return null;

    }
    if (largest < num) {
      largest = num;
    }

  }
  return largest;

}
// Count Vowels in a String
function countVowels(str) {
  let c = 0;
  const vowels = "AEIOUaeiou"
  for (let i = 0; i < str.length; i++) {
    if (typeof str[i] !== 'string') {
      console.log("Los datos de entrada no son adecuados");
      return null;
    }
    if (vowels.includes(str[i])) {
      c += 1;
    }
  }
  return c;

}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n == 'number') {
    if (n <= 1) {
      return false;
    }

    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }

    return true;
  }

  console.log("Los datos de entrada no son adecuados");

}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
