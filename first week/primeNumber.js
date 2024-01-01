const primeNumber = (number) => {
  const isPrime = 
    number !== 1 && 
    !isDivisibleFor(number, 2) && 
    !isDivisibleFor(number, 3) && 
    !isDivisibleFor(number, 5) && 
    !isDivisibleFor(number, 7);

  if (isPrime){
    return `Number is prime.`;
  }
  return `Number is not prime`;
}

const isDivisibleFor = (number, divisor) => {
  return number % divisor === 0;
}

console.log(primeNumber(1));
