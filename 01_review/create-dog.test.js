const dogDetailer2 = require('./create-dog');

describe('create dog function try 2', () => {
  it('return dog object', () => {
    const dog = dogDetailer2('rory', 3, '65 lbs');
    expect(dog).toEqual({
      name: 'rory',
      age: 3,
      weight: '65 lbs'
    });
  });
});