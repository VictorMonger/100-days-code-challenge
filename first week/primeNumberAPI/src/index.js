const express = require("express");
const app = express();

app.use(express.json());

app.get("/primeNumber", (request, response) => {
  const { number } = request.query;

  const numberIsPrime = isPrime(number);

  if (numberIsPrime) {
    return response.status(200).json({ data: "Number is prime!" });
  }
  return response.status(200).json({ data: "Number is not prime!" });
});

const isPrime = (number) => {
  if (failsBasicCheck(number)) {
    return false;
  }

  const halfRange = number / 2;

  for (let i = 7; i < halfRange; i = i + 2) {
    if (isDivisibleFor(number, i)) {
      return false;
    }
  }

  return true;
};

const failsBasicCheck = (number) => {
  return (
    parseInt(number) === 1 ||
    (isDivisibleFor(number, 2) && parseInt(number) !== 2) ||
    (isDivisibleFor(number, 3) && parseInt(number) !== 3) ||
    (isDivisibleFor(number, 5) && parseInt(number) !== 7)
  );
};

const isDivisibleFor = (number, divisor) => {
  return number % divisor === 0;
};

app.listen(3000);
