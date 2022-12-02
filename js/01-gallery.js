import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);

galleryContainer.addEventListener(`click`, (event) => {
  event.preventDefault();
  console.log(event.target);
});

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

galleryContainer.insertAdjacentHTML(
  "beforeend",
  createImageMarkup(galleryItems)
);
