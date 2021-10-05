// Любое целое число random между min ( включено ) и max ( включено ):
function randomNumber (min, max) {
  if (min > max || min === max || min < 0) {
    return false;
  }
  return Math.round(Math.random() * (max - min) + min);
}
randomNumber(6, 8);
// Функция для проверки максимальной длины строки
const comment = 'какой-то коммент';
const maxNum = 20;
const checkLengthComment = function () {
  if (comment.length <= maxNum) {
    return true;
  }
  else {
    return false;
  }
};
checkLengthComment(comment, maxNum);
