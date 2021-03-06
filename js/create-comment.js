import getRandomPositiveInteger from './utils/get-random-positive-integer.js';

const SIMILAR_COMENT_COUNT = 25;
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
const createComment = () => {
  const randomIdComment = getRandomPositiveInteger(0, 25);
  const randomAvatar = getRandomPositiveInteger(0, AVATAR.length - 1);
  const randomMessage = getRandomPositiveInteger(0, MESSAGE.length - 1);
  const randomName = getRandomPositiveInteger(0, NAME.length - 1);

  return {
    idComment: randomIdComment,
    avatar: AVATAR[randomAvatar],
    message: MESSAGE[randomMessage],
    name: NAME[randomName],
  };
};

const randomComent = () => Array.from({length: getRandomPositiveInteger(0, SIMILAR_COMENT_COUNT)}, createComment);
export {randomComent};
