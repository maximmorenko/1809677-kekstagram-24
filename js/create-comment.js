import {AVATAR, MESSAGE, NAME} from './arrays.js';

const SIMILAR_COMENT_COUNT = 25;

const createComment = () => {
  const randomIdComment = _.random(0, 25);
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
const randomComment = Array.from({length: SIMILAR_COMENT_COUNT}, createComment);
console.log(randomComment);
export {randomComment};
