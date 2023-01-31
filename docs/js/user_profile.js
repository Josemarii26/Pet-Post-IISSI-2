" use strict ";
import {
    photosAPI
} from "/js/api/photos.js";
import {
    messageRenderer
} from "/js/renderers/messages.js";
import {
    sessionManager
} from "/js/utils/session.js";
import {
    usersAPI
} from "/js/api/users.js";
import {
    userrenderer
} from "/js/renderers/users.js";
import {
    galleryRendererB
} from "/js/renderers/gallery_user.js";
import {
    galleryRendererA
} from "/js/renderers/gallery_user.js";


let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");

function main() {
    
    let usercontainer = document.getElementById("user-details-column");
    let usercontainer2 = document.getElementById("user-details2-column");

    cargarinfo(usercontainer, usercontainer2);

    let galleryContainer = document.getElementById("container");

    let usetprof = userId;
    if (sessionManager.isLogged()) {
        let userlogget = sessionManager.getLoggedUser().userId;
        if (usetprof == userlogget) {
            photosAPI.getAll()
                .then(photos => {
                    let gallery = galleryRendererA.asCardGalleryA(userId, photos);
                    galleryContainer.appendChild(gallery);
                })
                .catch(error => messageRenderer.showErrorMessage(error)) ;
        } else if (usetprof !== userlogget) {
            photosAPI.getAll()
                .then(photos => {
                    let gallery = galleryRendererB.asCardGalleryB(userId, photos);
                    galleryContainer.appendChild(gallery);
                })
                .catch(error => messageRenderer.showErrorMessage(error)) ;
        }
    } else if (!sessionManager.isLogged()) {
        photosAPI.getAll()
            .then(photos => {
                let gallery = galleryRendererB.asCardGalleryB(userId, photos);
                galleryContainer.appendChild(gallery);
            })
            .catch(error => messageRenderer.showErrorMessage(error));
    }
}


function cargarinfo(usercontainer, usercontainer2){
    usersAPI.getById(userId)
    .then(user => {
        let userDetail = userrenderer.info(user[0]);
        usercontainer.appendChild(userDetail);
    })
    .catch(error => messageRenderer.showErrorMessage(error));
    usersAPI.getById(userId)
    .then(user => {
        let userDetail2 = userrenderer.info2(user[0]);
        usercontainer2.appendChild(userDetail2);
    })
    .catch(error => messageRenderer.showErrorMessage(error));
}



document.addEventListener("DOMContentLoaded", main);