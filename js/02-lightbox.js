import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);

function createImageMarkup(markups) {
  return markups
    .map(
      ({ preview, original, description }) =>
        `
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
        </a>`
    )
    .join("");
}

galleryContainer.insertAdjacentHTML(
  "beforeend",
  createImageMarkup(galleryItems)
);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: `bottom`,
  captionDelay: 250,
  fadeSpeed: 350,
});
