const isEscapeKey = (evt) => evt.key === 'Escape';

// function randomNumber (min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   if (min > max || min === max || min < 0) {
//     return false;
//   }
//   return Math.round(Math.random() * (max - min) + min);
// }

function getRandomPositiveInteger (a, b) {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

export {isEscapeKey, getRandomPositiveInteger};
