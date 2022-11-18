const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const arrayLanguages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

function map(array, transform) {
  const mappedArray = [];
  let mappedItem;
  let multipied;

  array.forEach(item => {
    if (transform.includes('doubled') || transform.includes('halved')) {
      if (transform.includes('doubled')) {
        multipied = 2;
      } else if (transform.includes('halved')) {
        multipied = 0.5;
      }
      mappedItem = item * multipied;
    }

    if (transform.includes('price format')) {
      mappedItem = `$${Number.parseFloat(item).toFixed(2)}`;
    }

    if (transform.includes('uppercase')) {
      mappedItem = item.toUpperCase();
    }

    if (transform.includes('lowercase')) {
      mappedItem = item.toLowerCase();
    }

    if (transform.includes('first letters')) {
      mappedItem = item[0];
    }

    mappedArray.push(mappedItem);
  });

  return mappedArray;
}

console.log('doubled', map(arrayNumbers, 'doubled'));
console.log('halved', map(arrayNumbers, 'halved'));
console.log('price format', map(arrayNumbers, 'price format'));
console.log('uppercase', map(arrayLanguages, 'uppercase'));
console.log('lowercase', map(arrayLanguages, 'lowercase'));
console.log('first letters', map(arrayLanguages, 'first letters'));
