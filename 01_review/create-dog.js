const createDog2 = (name, age, weight) => ({ name, age, weight });

const dog = createDog2('rory', 3, '65 lbs');
console.log(dog);

module.exports = createDog2;
