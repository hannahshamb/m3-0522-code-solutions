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

function filter(array, predicate) {
  const filteredArray = [];
  let number;
  let text;
  let expression;

  array.forEach(item => {
    if (predicate.includes('divisible')) {
      number = Number(predicate.slice(12));
      expression = item % number === 0;
    }

    if (predicate.includes('greater than or equal to') || predicate.includes('less than or equal to')) {
      if (predicate.includes('greater than or equal to')) {
        number = Number(predicate.slice(25));
        expression = item >= number;
      } else if (predicate.includes('less than or equal to')) {
        number = Number(predicate.slice(22));
        expression = item <= number;
      }
    } else if (predicate.includes('greater than') || predicate.includes('less than')) {
      if (predicate.includes('greater than')) {
        number = Number(predicate.slice(13));
        expression = item > number;
      } else if (predicate.includes('less than')) {
        number = Number(predicate.slice(10));
        expression = item < number;
      }
    }

    if (predicate.includes('starts with')) {
      text = predicate.slice(12);
      expression = item.startsWith(text);
    }

    if (predicate.includes('includes') || predicate.includes('has')) {
      if (predicate.includes('includes')) {
        text = predicate.slice(9);
      } else if (predicate.includes('has')) {
        text = predicate.slice(4);
      }

      expression = item.includes(text) || item.includes(text.toLowerCase());
    }

    if (expression) {
      filteredArray.push(item);
    }
  });
  return filteredArray;
}

console.log('divisible by 2', filter(numbersArray, 'divisible by 2'));

console.log('greater than 5', filter(numbersArray, 'greater than 5'));

console.log('greater than or equal to 5', filter(numbersArray, 'greater than or equal to 5'));

console.log('less than 5', filter(numbersArray, 'less than 5'));

console.log('less than or equal to 5', filter(numbersArray, 'less than or equal to 5'));

console.log('starts with E', filter(namesArray, 'starts with E'));

console.log('includes D', filter(namesArray, 'includes D'));
