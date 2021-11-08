// import {addMiniPicture} from './preview-pictures.js';

const bigPicture = document.querySelector('.big-picture');

const closeFullPictureButton = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentBigPicture = bigPicture.querySelector('.social__comment');
const commentsContainer = bigPicture.querySelector('.social__comments');

const closePost = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const isEscapeKey = (evt) => evt.key === 'Escape';
const onPostEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closePost();
  }
};

const closeFullPicture = () => {
  closePost();
  document.removeEventListener('keydown', onPostEscKeydown);
};

const openFullPicture = (evt, postsArray) => {
  const postId = evt.target.getAttribute('data-id');
  const commentsElements = document.createDocumentFragment();
  const post = postsArray[postId];
  const comments = post.comments;

  bigPicture.querySelector('.big-picture__img > img').src = post.url;
  bigPicture.querySelector('.social__caption').textContent = post.description;
  bigPicture.querySelector('.likes-count').textContent = post.like;
  bigPicture.querySelector('.comments-count').textContent = post.comments.length;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  comments.forEach((comment) => {
    const newComment = commentBigPicture.cloneNode(true);
    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__picture').alt = comment.name;
    newComment.querySelector('.social__text').textContent = comment.message;
    commentsElements.appendChild(newComment);
  });
  commentsContainer.innerHTML = '';
  commentsContainer.appendChild(commentsElements);
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPostEscKeydown);
};

closeFullPictureButton.addEventListener('click', closeFullPicture);
// export {openPost};
