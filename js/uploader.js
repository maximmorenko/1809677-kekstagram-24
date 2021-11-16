import getRandomPositiveInteger from './utils/get-random-positive-integer.js';

const openUploader = function () {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.querySelector('.scale__control--value').value = 100;
  document.querySelector('.text__hashtags').focus();
};

const closeUploader = function () {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
};

const uploader = function () {
  const UploadFile = document.querySelector('#upload-file');

  const handlerClick = function (event) {
    const targetElement = event.target;
    switch (targetElement.className) {
      case 'img-upload__overlay':
      case 'img-upload__cancel  cancel':
        closeUploader();
        break;
      default:
        break;
    }
  };

  const handlerEsc = function (event) {
    if (event.keyCode === 27) {
      closeUploader();
    }
  };

  UploadFile.onchange = function () {
    openUploader();
    // set random img
    document.querySelector('.img-upload__preview img').src = `photos/${getRandomPositiveInteger(0, 25)}.jpg`;
  };

  document.querySelector('.img-upload__overlay').addEventListener('click', handlerClick);
  document.querySelector('.img-upload__overlay').addEventListener('keyup', handlerEsc);


  // scale
  const handlerScaleChange = function (event) {
    const currentScale = Number(document.querySelector('.scale__control--value').value);
    switch (event.target.className) {
      case 'scale__control  scale__control--bigger' :
        if (currentScale < 100) {
          document.querySelector('.scale__control--value').value = currentScale + 25;
        }
        break;
      case 'scale__control  scale__control--smaller' :
        if (currentScale > 25) {
          document.querySelector('.scale__control--value').value = currentScale - 25;
        }
        break;
    }

    document.querySelector('.img-upload__preview img').style = `transform: scale(${currentScale / 100})`;
  };

  document.querySelector('.scale__control--smaller').onclick = handlerScaleChange;
  document.querySelector('.scale__control--bigger').onclick = handlerScaleChange;

  // -----

  document.querySelectorAll('input[name=\'effect\']').forEach((input) => {
    input.onclick = function () {
      const img = document.querySelector('.img-upload__preview img');
      switch (input.value) {
        case 'none':
          img.style = '';
          break;
        case 'chrome':
          img.style = `filter: grayscale(0.75)`;
          break;
        case 'sepia':
          img.style = `filter: sepia(1)`;
          break;
        case 'marvin':
          img.style = `filter: invert(100%)`;
          break;
        case 'phobos':
          img.style = `filter: blur(3px)`;
          break;
        case 'heat':
          img.style = `filter: brightness(3)`;
          break;
      }
    };
  });
};

export {
  uploader,
  openUploader,
  closeUploader
};
