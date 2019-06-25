
const { map, filter } = require('./index');

describe('array methods', () => {
  it('map and return newArray ', () => {
    const numsArray = [4, 6, 10];
    const sqaured = map(numsArray, number => number * number);
    expect(sqaured).toEqual([16, 36, 100]);
  });

  it('filter and return an array ', () => {
    const wordArray = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const filtered = filter(wordArray, word => word.length < 6);
    expect(filtered).toEqual(expect.any(Array));
  });

});
