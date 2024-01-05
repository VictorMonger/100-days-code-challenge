const getPositiveRatio = (arr) => {
  const positiveQuantity = arr.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
      accumulator++;
    }
    return accumulator;
  }, 0);
  const positiveRatio = positiveQuantity / arr.length;
  return positiveRatio.toFixed(6);
};

const getNegativeRatio = (arr) => {
  const negativeQuantity = arr.reduce((accumulator, currentValue) => {
    if (currentValue < 0) {
      accumulator++;
    }
    return accumulator;
  }, 0);
  const negativeRatio = negativeQuantity / arr.length;
  return negativeRatio.toFixed(6);
};

const getZeroRatio = (arr) => {
  const zeroQuantity = arr.reduce((accumulator, currentValue) => {
    if (currentValue === 0) {
      accumulator++;
    }
    return accumulator;
  }, 0);
  const zeroRatio = zeroQuantity / arr.length;
  return zeroRatio.toFixed(6);
};

const arr = [-4, 3, -9, 0, 4, 1];

console.log(getPositiveRatio(arr));
console.log(getNegativeRatio(arr));
console.log(getZeroRatio(arr));
