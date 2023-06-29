
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const galleryMarkup = galleryItems.map(({ preview, original, description }) => `
  <li>
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
`).join('');


gallery.innerHTML = galleryMarkup;


new SimpleLightbox('.gallery a');
