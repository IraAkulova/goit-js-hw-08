// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGallaryMurkup(galleryItems);


galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallaryMurkup(img) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        data-title="${description}"
        />
        </a>
        </div>`;
    }).join('');

}

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});