const imgUploadForm = function ({ onSuccess, onError }) {

  const openModal = function (type) {
    const template = document.createElement('span');

    const hideModal = function () {
      template.remove();
    };

    const handlerEsc = function (event) {
      if (event.keyCode === 27) {
        hideModal();
        document.removeEventListener('keyup', handlerEsc);
      }
    };

    const handlerClick = function (event) {
      if (event.target.type === 'button' || event.target.tagName === 'SECTION') {
        hideModal();
        document.addEventListener('keyup', handlerEsc);
        template.addEventListener('click', handlerClick);
      }
    };

    document.addEventListener('keyup', handlerEsc);
    template.addEventListener('click', handlerClick);

    switch (type) {
      case 'success' :
        template.innerHTML = document.querySelector('#success').innerHTML;
        document.body.appendChild(template);
        break;
      case 'error' :
        template.innerHTML = document.querySelector('#error').innerHTML;
        document.body.appendChild(template);
        break;
    }
  };

  document.querySelector('#upload-select-image').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);

    const XHR = new XMLHttpRequest();

    XHR.addEventListener('load', () => {
      openModal('success');
      onSuccess();
    });

    XHR.addEventListener('error', () => {
      openModal('error');
      onError();
    });

    XHR.open('POST', ' https://24.javascript.pages.academy/kekstagram');
    XHR.send(formData);
  });
};

export default imgUploadForm;
