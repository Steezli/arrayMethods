
const { map } = require('./index');

describe('array method test', () => {
  it('map and return newArray ', () => {
    const array = [4, 6, 10];
    const sqaured = map(array, number => number * number);
    expect(sqaured).toEqual([16, 36, 100]);
  });
}) 