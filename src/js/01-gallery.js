import SimpleLightbox from "simplelightbox";
import "../../node_modules/simplelightbox/src/simple-lightbox.scss";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector(".gallery");

const addImages = () => {
    const adding = galleryItems.reduce((acc, el) => acc + `<li><a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      alt="${el.description}"
    />
  </a></li>`, "");
    gallery.insertAdjacentHTML("beforeend", adding);
}
    addImages();
    const lightbox = new SimpleLightbox(`.gallery a`, {captionsData: "alt", captionDelay: 250})