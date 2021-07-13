function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll('.img')];

  this.modal = getElement('.modal');
  this.modalImg = getElement('.main-img');
  this.modalImages = getElement('.modal-images');
  this.imageName = getElement('.image-name');
  this.closeBtn = getElement('.close-btn');
  this.nextBtn = getElement('.next-btn');
  this.prevBtn = getElement('.prev-btn');

  // let self = this;
  this.closeModal = this.closeModal.bind(this);
  this.next = this.next.bind(this);
  this.prev = this.prev.bind(this);
  this.chooseImage = this.chooseImage.bind(this);

  // this.openModal = this.openModal.bind(this);
  this.container.addEventListener(
    'click',
    function (e) {
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list);
        this.setMainImage(e.target);
      }
    }.bind(this)
  );
}

Gallery.prototype.openModal = function (selectedImage, list) {
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img
          src="${image.src}"
          alt=""
          title="${image.title}"
          class="modal-img ${
            image.dataset.id === selectedImage.dataset.id ? ' selected' : ''
          }"
          data-id="${image.dataset.id}"
        />`;
    })
    .join('');
  this.modal.classList.add('open');

  this.closeBtn.addEventListener('click', this.closeModal);
  this.nextBtn.addEventListener('click', this.next);
  this.prevBtn.addEventListener('click', this.prev);
  this.modalImages.addEventListener('click', this.chooseImage);
};

Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');
  this.closeBtn.removeEventListener('click', this.closeModal);
  this.nextBtn.removeEventListener('click', this.next);
  this.prevBtn.removeEventListener('click', this.prev);
  this.modalImages.removeEventListener('click', this.chooseImage);
};

Gallery.prototype.next = function () {
  const selected = this.modalImages.querySelector('.selected');
  const next =
    selected.nextElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove('selected');
  next.classList.add('selected');
  this.setMainImage(next);
};

Gallery.prototype.prev = function () {
  const selected = this.modalImages.querySelector('.selected');
  const prev =
    selected.previousElementSibling || this.modalImages.lastElementChild;
  selected.classList.remove('selected');
  prev.classList.add('selected');
  this.setMainImage(prev);
};

Gallery.prototype.chooseImage = function (e) {
  const selected = e.target;
  if (
    selected.classList.contains('modal-img') &&
    !selected.classList.contains('selected')
  ) {
    this.modalImages.querySelector('.selected').classList.remove('selected');
    selected.classList.add('selected');
    this.setMainImage(selected);
  }
};

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
