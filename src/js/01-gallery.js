// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
// Описаний в документації
import SimpleLightbox from "simplelightbox";
console.log(SimpleLightbox);
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');

function createGalleryList(galleryItems) {
    return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}">
            </a>
        </li>`,
    )
    .join('');
}
galleryEl.innerHTML = createGalleryList(galleryItems);

const myGallery = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});
