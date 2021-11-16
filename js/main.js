import { addPicture } from './create-picture.js';
import { uploader, closeUploader } from './uploader.js';
import imgUploadForm from './img-upload-form.js';

addPicture();
uploader();
imgUploadForm({
  onSuccess: function () {
    closeUploader();
  },
  onError: function () {
    closeUploader();
  },
});
