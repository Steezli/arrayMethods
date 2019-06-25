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
    if(callback[i]) {
      filteredArray[i] = (array[i]);
    }
  }
  return filteredArray;
}

const numsArray = [4, 6, 10];
const wordArray = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(map(numsArray, number => number * number));
console.log(wordArray.filter(word => word.length < 6));

module.exports = { map, filter };
