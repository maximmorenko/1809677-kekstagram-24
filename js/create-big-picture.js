import {photoUrl, likesId, photoCommentsCount, randomNameIndex, photoDescriptionIndex, avatarUrl, photoComments} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImgWrap = bigPicture.querySelector('.big-picture__img');
const bigPictureImg = bigPictureImgWrap.querySelector('img');
// ищу body чтобы ему добавить класс
const body = document.querySelector('body');
// ищу.likes-count
const bigPictureLikes = bigPicture.querySelector('.likes-count');
// ищу .comments-count
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
// ищу блок коментариев и кнопку загрузки чтоюы спрятать их
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const buttonCommentsLoader = bigPicture.querySelector('.comments-loader');
// ищу блок с коментариями
const commentsBlock = bigPicture.querySelector('.social__comment');
// в нем ищу img аватарку с классом social__picture
const commentItemImg = commentsBlock.querySelector('.social__picture');
// ищу текст коментария
const commentItemText = bigPicture.querySelector('.social__text');
// ищу блок с описанием
const bigPictureImgDescription = bigPicture.querySelector('.social__caption');

// ищу иконку закрытия окна
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const getPhotosInfo = () => {
  // добавляю класс боди чтобы фон не скролил
  body.classList.add('modal-open');
  // удаляю класс хиден чтобы увидеть инфоблок фото

  // bigPicture.classList.remove('hidden');

  // прячу счетчик коментов и кнопку загрузки
  socialCommentCount.classList.add('hidden');
  buttonCommentsLoader.classList.add('hidden');

  // подставляю фото из массива через рандом
  bigPictureImg.src = photoUrl;
  // подставляю лайки
  bigPictureLikes.textContent = likesId;
  // подставляю кол-во коментариев в .comments-count
  bigPictureCommentsCount.textContent = photoCommentsCount;
  // подставляю аватар и имя
  commentItemImg.src = avatarUrl;
  commentItemImg.alt = randomNameIndex;
  // подставляю комент
  commentItemText.textContent = photoComments;
  // подставляю блок с описанием
  bigPictureImgDescription.textContent = photoDescriptionIndex;
};
const infoPhotos = getPhotosInfo();
console.log(infoPhotos);

bigPictureCancel.addEventListener('click', () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
  }
});

export {infoPhotos};

