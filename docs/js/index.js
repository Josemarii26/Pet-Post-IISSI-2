" use strict ";

import {
    galleryRendererBIndex
} from '/js/renderers/gallery_user.js';
import {
    photosAPI
} from "/js/api/photos.js";
import {
    messageRenderer
} from "/js/renderers/messages.js";

function main() {
    let galleryContainer = document.querySelector("div.container");
    photosAPI.getAll()
        .then(photos => {
            let gallery = galleryRendererBIndex.asCardGalleryBIndex(photos);
            galleryContainer.appendChild(gallery);
        })
        .catch(error => messageRenderer.showErrorMessage(error));
}






document.addEventListener("DOMContentLoaded", main);