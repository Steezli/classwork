const createDog = (name, age, weight) => {
  return {
    name,
    age,
    weight
  };

};
const dog = createDog('spot', 5, '20 lbs');
console.log(dog);

module.exports = createDog;
