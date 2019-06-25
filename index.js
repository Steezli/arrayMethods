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
    if(callback(Array[i])) {
      filteredArray[filteredArray.length] = array[i];
    }
  }
  return filteredArray;
}

const numsArray = [1, 2, 4, 6, 10];
console.log(map(numsArray, number => number * number));
console.log(filter(numsArray, num => num === 2));

module.exports = { map, filter };
