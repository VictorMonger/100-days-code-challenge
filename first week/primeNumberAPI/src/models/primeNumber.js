const isPrime = (number) => {
  if (failsBasicCheck(number)) {
    return false;
  }

  const halfRange = number / 2;
  const initialCheckNumber = 3;

  for (let i = initialCheckNumber; i < halfRange; i = i + 2) {
    if (isDivisibleFor(number, i)) {
      return false;
    }
  }

  return true;
};

const failsBasicCheck = (number) => {
  return (
    parseInt(number) === 1 ||
    (isDivisibleFor(number, 2) && parseInt(number) !== 2)
  );
};

const isDivisibleFor = (number, divisor) => {
  return number % divisor === 0;
};

module.exports = {
  isPrime,
}
