function map(array, callback) {
  const newArray = [];
  let i = 0;
  for(i; i < array.length; i++) {
    newArray[i] = callback(array[i]);
  }
  return newArray;
}

const array = [4, 6, 10];
console.log(map(array, number => number * number))

module.exports = { map };
