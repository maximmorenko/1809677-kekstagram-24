import {similarObjects} from './data.js';

const addPreviewPicture = function() {
  const PICTURE = document.querySelector('.pictures');
  const templateFragment = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();
  similarObjects.forEach((element) => {
    const photo = templateFragment.cloneNode(true);
    photo.querySelector('.picture__img').src = element.img;
    photo.querySelector('.picture__comments').textContent = element.comments.length;
    photo.querySelector('.picture__likes').textContent = element.likes;
    fragment.appendChild(photo);
  });
  PICTURE.appendChild(fragment);
};
export {addPreviewPicture};
