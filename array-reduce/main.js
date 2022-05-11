const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log('sum', sum);

const product = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);
console.log('product', product);

const initialValue = 0;
const balance = account.reduce(
  (previousValue, currentValue) => {
    let balanceValue;
    if (currentValue.type === 'deposit') {
      balanceValue = previousValue + currentValue.amount;
    } else if (currentValue.type === 'withdrawal') {
      balanceValue = previousValue - currentValue.amount;
    }
    return balanceValue;
  }, initialValue);
console.log('balance', balance);

const composite = traits.reduce(
  (previousValue, currentValue) => {
    const obj = Object.assign(previousValue, currentValue);
    return obj;
  });
console.log('composite', composite);
