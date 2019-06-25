function map(array, callback) {
  const mappedArray = [];
  let i = 0;
  for(i; i < array.length; i++) {
    mappedArray[i] = callback(array[i]);
  }
  return mappedArray;
}

function filter(array, callback) {
  const filteredArray = [];
  let i = 0;
  for(i; i < array.length; i++) {
    if(callback(array[i])) {
      filteredArray[filteredArray.length] = array[i];
    }
  }
  return filteredArray;
}

function indexOf(array, callback) {
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) return i;
  }
  return -1;
}

function reducer(array, callback, initialValue) {
  let acc = initialValue;
  let i = 0;
  if(initialValue === undefined) {
    acc = array[0];
    i = 1;
  }

  for(i; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc;
}

const numsArray = [1, 2, 4, 6, 10];
console.log(map(numsArray, number => number * number));
console.log(filter(numsArray, num => num === 2));
// console.log(indexOf());

module.exports = { map, filter, indexOf, reducer };
