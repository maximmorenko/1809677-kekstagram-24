import { randomComent } from './create-comment.js';
import getRandomPositiveInteger from './utils/get-random-positive-integer.js';

const PHOTOS = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];

const DESCRIPTION = [
  'Не всё отлично!',
  'В целом всё, но не всё.',
  'Когда вы делаете фотографию, хорошо бы в конце концов.',
  'Моя бабушка.',
  'На банановой кожуре.',
  'Неудачный момент.',
];

const createObject = () => {
  const randomIdObject = getRandomPositiveInteger(0, 25);
  const randomPhotos = getRandomPositiveInteger(0, PHOTOS.length - 1);
  const randomDescription = getRandomPositiveInteger(0, DESCRIPTION.length - 1);
  const randomLikes = getRandomPositiveInteger(15, 200);
  return {
    number: randomIdObject,
    imgId: randomPhotos,
    img: PHOTOS[randomPhotos],
    description: DESCRIPTION[randomDescription],
    likes: randomLikes,
    comments: randomComent(),
  };
};

const similarObject = [];

while (similarObject.length < PHOTOS.length) {
  let isUnique = true;
  const newItem = createObject();

  if (!similarObject.length) {
    similarObject.push(newItem);
    continue;
  }

  for (let index = 0; index < similarObject.length; index++) {
    const currentItem = similarObject[index];
    if (currentItem.imgId === newItem.imgId) {
      isUnique = false;
    }
  }

  if (isUnique) {
    similarObject.push(newItem);
  }
}

export { similarObject };
