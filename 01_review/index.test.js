const dogDetailer = require('./index');

//test suite
describe('dog create function', () => {
  //individiual tests
  it('returns a dog object', () => {
    const dog = dogDetailer('spot', 5, '20 lbs');
    expect(dog).toEqual({
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    });
  });
});
