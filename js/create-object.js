import {randomComment} from './create-comment.js';
import {PHOTOS, DESCRIPTION} from './arrays.js';
// import { photoId, photoUrl, photoDescriptionIndex, likesId, photoComments} from './utils.js';
const SIMILAR_OBJECT_COUNT = 25;

const createObject = () => {
  const randomIdObject = _.random(0, 25);
  const randomPhotos = _.random(0, PHOTOS.length - 1);
  const randomDescription = _.random(0, DESCRIPTION.length - 1);
  const randomLikes = _.random(15, 200);
  randomComment;
  return {
    number: randomIdObject,
    photos: PHOTOS[randomPhotos],
    description: DESCRIPTION[randomDescription],
    likes: randomLikes,
    comment: randomComment,
  };
};
const similarObjects = Array.from({length: SIMILAR_OBJECT_COUNT}, createObject);
console.log(similarObjects);
export {similarObjects};
