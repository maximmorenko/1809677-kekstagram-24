import {similarObject} from './create-object.js';

const addPicture = function() {
  const PICTURE = document.querySelector('.pictures');
  const templateFragment = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();
  similarObject.forEach((element) => {
    const photo = templateFragment.cloneNode(true);
    photo.querySelector('.picture__img').src = element.img;
    photo.querySelector('.picture__comments').textContent = element.comments.length;
    photo.querySelector('.picture__likes').textContent = element.likes;
    fragment.appendChild(photo);
  });
  PICTURE.appendChild(fragment);
};
export {addPicture};
