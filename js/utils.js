import {DESCRIPTION, PHOTOS, AVATAR, MESSAGE, NAME} from './arrays.js';

const photoId = _.random(1, 25);
// photoId(1, 25);

const photoUrl = _.random(0, PHOTOS.length - 1);

const likesId = _.random(15, 200);
// likesId(15, 200);

const photoCommentsCount = _.random(1, 200);
// photoCommentsCount (1, 200);

const photoComments = _.random(0, MESSAGE.length - 1);

const avatarUrl = _.random(0, AVATAR.length - 1);

const randomNameIndex = _.random(0, NAME.length - 1);

const photoDescriptionIndex = _.random(0, DESCRIPTION.length - 1);

// randomComent

export {photoUrl, photoId, likesId, photoCommentsCount, randomNameIndex, photoDescriptionIndex, avatarUrl, photoComments};
