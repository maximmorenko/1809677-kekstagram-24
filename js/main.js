 // Любое целое число random между min ( включено ) и max ( включено ):
 function randomNumber(min, max) {
  if (min > max || min == max || min < 0) {
      console.log('Задайте правильные аргументы: минимальное число должно быть меньше максимального и больше или равно нулю');
       return
  }
return Math.round(Math.random() * (max - min) + min);
}
console.log(randomNumber(0, 7));

// Функция для проверки максимальной длины строки
let comment = 'какой-то коммент';
let maxNum = 20;
let checkLengthComment = function() {
  if (comment.length <= maxNum) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}
checkLengthComment(comment, maxNum)
