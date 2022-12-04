import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);

galleryContainer.addEventListener(`click`, onProhibitsDownloadingImage);
galleryContainer.addEventListener(`click`, onModalVievingImage);
galleryContainer.insertAdjacentHTML(
  "beforeend",
  createImageMarkup(galleryItems)
);

function createImageMarkup(markups) {
  return markups
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`
    )
    .join("");
}

function onProhibitsDownloadingImage(event) {
  event.preventDefault();
}

function onModalVievingImage(event) {
  const viewediImage = event.target.dataset.source;

  if (event.target.nodeName !== "IMG") return;
  const instance = basicLightbox.create(
    `
    <img src="${viewediImage}">
`,
    {
      onShow: (instance) => {
        document.addEventListener(
          `keydown`,
          closingModalWindowClickingOnEscape
        );
      },
      onClose: (instance) => {
        document.removeEventListener(
          `keydown`,
          closingModalWindowClickingOnEscape
        );
      },
    }
  );

  instance.show();

  function closingModalWindowClickingOnEscape(event) {
    console.log(event);
    if (event.code !== `Escape`) return;
    instance.close();
  }
}
