import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);

function createImageMarkup(markups) {
  return markups
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="large-image.jpg">
            <img
              class="gallery__image"
              src="small-image.jpg"
              data-source="large-image.jpg"
              alt="Image description"
            />
          </a>
        </div>`
    )
    .join("");
}

console.log(createImageMarkup(galleryItems));
