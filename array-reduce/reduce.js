const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const accountArray = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traitsArray = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const add = (item, result) => {
  result += item;
  return result;
};
console.log('reduce(numbersArray, add, 0)', reduce(numbersArray, add));

const multiply = (item, result) => {
  result *= item;
  return result;
};
console.log('reduce(numbersArray, multiply)', reduce(numbersArray, multiply));

const accountBalance = (item, result) => {
  if (item.type === 'deposit') {
    result += item.amount;
  }
  if (item.type === 'withdrawal') {
    result -= item.amount;
  }
  return result;
};
console.log('reduce(accountArray, accountBalance)', reduce(accountArray, accountBalance));

const compositer = (item, result) => {
  for (const prop in item) {
    result[prop] = item[prop];
  }
  return result;
};
console.log('reduce(traitsArray, compositer)', reduce(traitsArray, compositer));

function reduce(array, reducer, initialValue) {
  let result;

  if (initialValue === undefined) {
    if (array[0].amount === undefined) {
      initialValue = array[0];
    } else initialValue = array[0].amount;
  }
  result = initialValue;

  array.forEach((item, index) => {
    if (initialValue === array[0] || initialValue === array[0].amount) {
      if (index > 0) {
        result = reducer(item, result);
      }
    } else result = reducer(item, result);

  });
  return result;
}
