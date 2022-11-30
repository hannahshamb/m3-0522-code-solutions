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

function reduce(array, reducer, initialValue) {
  let result;
  if (initialValue !== undefined) {
    result = initialValue;
  }

  if (reducer === 'sum' || reducer === 'product') {
    if (reducer === 'sum' && initialValue === undefined) {
      result = 0;
    } else if (reducer === 'product' && initialValue === undefined) {
      result = 1;
    }
    array.forEach((item, index) => {
      if (reducer === 'sum') {
        result += item;
      } else {
        result *= item;
      }
    });
  }

  if (reducer === 'balance') {
    if (initialValue === undefined) {
      result = 0;
    }
    array.forEach(item => {
      if (item.type === 'deposit') {
        result += item.amount;
      }
      if (item.type === 'withdrawal') {
        result -= item.amount;
      }
    });
  }

  if (reducer === 'composite') {
    result = {};
    array.forEach(item => {
      for (const prop in item) {
        result[prop] = item[prop];
      }
    });
  }

  return result;
}

console.log('reduce(numbersArray, sum, 0)', reduce(numbersArray, 'sum', 0));
console.log('reduce(numbersArray, product)', reduce(numbersArray, 'product'));
console.log('reduce(accountArray, balance)', reduce(accountArray, 'balance'));
console.log('reduce(traitsArray, composite)', reduce(traitsArray, 'composite'));
