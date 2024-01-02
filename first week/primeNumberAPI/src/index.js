const express = require('express');
const app = express();

app.use(express.json());

app.get('/primeNumber', (request, response) => {
  const { number } = request.query;

  console.time('time')
  const numberIsPrime = isPrime(number);
  console.timeEnd('time')

  if (numberIsPrime) {
    return response.status(200).json({ data: 'Number is prime!'})
  }
  return response.status(200).json({ data: 'Number is not prime!'})
});

const isPrime = (number) => {
  const halfRange = number / 2;
  const failsBasicCheck = parseInt(number) === 1 || isDivisibleFor(number, 2) || isDivisibleFor(number, 3) || isDivisibleFor(number, 5);
  
  if (failsBasicCheck) {
    return false
  }

  for (let i = 7; i < halfRange; i++) {
    if (number % i === 0) {
      return false
    };
  };
  return true
}

const isDivisibleFor = (number, divisor) => {
  return number % divisor === 0;
}

app.listen(3000);
