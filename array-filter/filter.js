const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const namesArray = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const divisibleByTwo = item => {
  const newArray = [];
  if (item % 2 === 0) {
    return item;
  }
};
console.log('filter(numbersArray, divisibleByTwo)', filter(numbersArray, divisibleByTwo));

const greaterThanFive = item => {
  if (item >= 5) {
    return item;
  }
};
console.log('filter(numbersArray, greaterThanFive)', filter(numbersArray, greaterThanFive));

const beginsWithE = item => {
  if (item.toLowerCase().startsWith('e')) {
    return item;
  }
};
console.log('filter(namesArray, beginsWithE)', filter(namesArray, beginsWithE));

const containsD = item => {
  if (item.toLowerCase().includes('d')) {
    return item;
  }
};
console.log('filter(namesArray, containsD)', filter(namesArray, containsD));

function filter(array, predicate) {
  const filteredArray = [];
  array.forEach(item => {
    if (predicate(item) !== undefined) {
      filteredArray.push(predicate(item));
    }
  });
  return filteredArray;
}
