// модуль для генерации временных данных
// import {randomComment} from './create-comment.js';
import {getRandomPositiveInteger} from './utils.js';

const AVATAR = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAME = [
  'Аглая',
  'Аделаида',
  'Александра',
  'Аврора',
  'Ася',
  'Павлина',
];

const SIMILAR_COMMENT_COUNT = 25;
const MIN_RANDOM_ID_COMMENT = 0;
const MAX_RANDOM_ID_COMMENT = 25;

const createComment = () => {
  const randomIdComment = _.random(MIN_RANDOM_ID_COMMENT, MAX_RANDOM_ID_COMMENT);
  const randomAvatar = _.random(0, AVATAR.length - 1);
  const randomMessage = _.random(0, MESSAGE.length - 1);
  const randomName = _.random(0, NAME.length - 1);
  return {
    idComment: randomIdComment,
    avatar: AVATAR[randomAvatar],
    message: MESSAGE[randomMessage],
    name: NAME[randomName],
  };
};
const randomComment = Array.from({length: SIMILAR_COMMENT_COUNT}, createComment);

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

const SIMILAR_OBJECT_COUNT = 25;

const DESCRIPTION = [
  'Не всё отлично!',
  'В целом всё, но не всё.',
  'Когда вы делаете фотографию, хорошо бы в конце концов.',
  'Моя бабушка.',
  'На банановой кожуре.',
  'Неудачный момент.',
];

const createObject = () => {
  const randomIdObjects = _.random(0, 25);
  const randomPhotos = _.random(0, PHOTOS.length - 1);
  const randomDescription = _.random(0, DESCRIPTION.length - 1);
  const randomLikes = _.random(15, 200);
  randomComment;
  return {
    id: randomIdObjects,
    img: PHOTOS[randomPhotos],
    description: DESCRIPTION[randomDescription],
    likes: randomLikes,
    comments: randomComment,
  };
};
const similarObjects = Array.from({length: SIMILAR_OBJECT_COUNT}, createObject);
export {similarObjects};
