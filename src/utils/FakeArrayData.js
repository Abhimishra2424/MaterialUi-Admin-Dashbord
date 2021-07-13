export const FakeArrayDataGenerator = ({ count, digit }) => {
  const array = [];
  for (let index = 0; index < count; index++) {
    const element = Math.round(Math.random() * digit);
    array.push(element);
  }
  return array;
};

export const randomValueGenerator = ({ digit }) => {
  const elem = Math.round(Math.random() * digit);
  return elem;
};
