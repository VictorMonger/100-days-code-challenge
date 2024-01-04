const { isPrime } = require("../models/primeNumber");

const primeNumber = (request, response) => {
  const { number } = request.query;

  if (!number) {
    return response.status(400).json({ Error: "No number to check!" });
  }

  const numberIsPrime = isPrime(number);

  if (numberIsPrime) {
    return response.status(200).json({ data: "Number is prime!" });
  }
  return response.status(200).json({ data: "Number is not prime!" });
};

module.exports = {
  primeNumber,
};
