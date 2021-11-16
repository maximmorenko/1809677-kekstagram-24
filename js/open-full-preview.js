const openFullPreview = function (imgItem) {
  return function () {
    const bigPictureFragment = document.querySelector('.big-picture');
    // open full preview
    bigPictureFragment.classList.remove('hidden');

    const handlerClose = function (event) {
      const targetElement = event.target;
      switch (targetElement.className) {
        case 'big-picture overlay':
        case 'big-picture__cancel  cancel':
          bigPictureFragment.classList.add('hidden');
          document.querySelector('.big-picture').removeEventListener('click', handlerClose);
          break;
        default:
          break;
      }
    };

    const handlerEsc = function (event) {
      if (event.keyCode === 27) {
        bigPictureFragment.classList.add('hidden');
        document.removeEventListener('keyup', handlerEsc);
      }
    };

    // set date
    document.querySelector('.big-picture__img img').src = imgItem.img;
    document.querySelector('.likes-count').textContent = imgItem.likes;
    document.querySelector('.comments-count').textContent = imgItem.comments.length;

    const socialComments = document.querySelector('.social__comments');
    // remove old comments
    socialComments.innerHTML = '';

    // set  new comments
    imgItem.comments.forEach((comment) => {
      const template = document.createElement('template');
      const html = `<li class="social__comment"> <img
           class="social__picture"
           src="${comment.avatar}"
           alt="${comment.name}"
           width="35" height="35">
              <p class="social__text">${comment.message}</p>
        </li>`;
      template.innerHTML = html;
      socialComments.appendChild(template.content.firstChild);
    });


    document.querySelector('.big-picture').addEventListener('click', handlerClose);
    document.addEventListener('keyup', handlerEsc);
  };
};


export default openFullPreview;
