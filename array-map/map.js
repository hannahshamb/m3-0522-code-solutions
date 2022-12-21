const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const arrayLanguages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubler = item => {
  return item * 2;
};
console.log('map(arrayNumbers, doubled)', map(arrayNumbers, doubler));

const halved = item => {
  return item * 0.5;
};
console.log('map(arrayNumbers, halved)', map(arrayNumbers, halved));

const priceFormat = item => {
  return `$${Number.parseFloat(item).toFixed(2)}`;
};
console.log('map(arrayNumbers, priceFormat)', map(arrayNumbers, priceFormat));

const uppercase = item => {
  return item.toUpperCase();
};
console.log('map(arrayLanguages, uppercase)', map(arrayLanguages, uppercase));

const lowercase = item => {
  return item.toLowerCase();
};
console.log('map(arrayLanguages, lowercase)', map(arrayLanguages, lowercase));

const firstLetter = item => {
  return item[0];
};
console.log('map(arrayLanguages, firstLetter)', map(arrayLanguages, firstLetter));

function map(array, transform) {
  const mappedArray = [];
  array.forEach(item => {
    if (transform(item)) {
      mappedArray.push(item);
    }
  });
  return mappedArray;
}
