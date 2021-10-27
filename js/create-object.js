import {randomComent} from './create-comment.js';

const SIMILAR_OBJECT_COUNT = 25;

const PHOTOS = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
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
  const randomIdObject = _.random(0, 25);
  const randomPhotos = _.random(0, PHOTOS.length - 1);
  const randomDescription = _.random(0, DESCRIPTION.length - 1);
  const randomLikes = _.random(15, 200);
  randomComent;
  return {
    number: randomIdObject,
    img: PHOTOS[randomPhotos],
    description: DESCRIPTION[randomDescription],
    likes: randomLikes,
    comments: randomComent,
  };
};
const similarObject = Array.from({length: SIMILAR_OBJECT_COUNT}, createObject);
export {similarObject};
