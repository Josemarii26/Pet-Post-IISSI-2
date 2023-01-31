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
    badwordsAPI
} from "/js/api/badwords.js";
import {
    palabrasValidator
} from "/js/validators/edit.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");
let currentPhoto = null;


function main() {
    if (!sessionManager.isLogged()) {
        messageRenderer.showErrorMessage("You must be registered to be able to do that :(")
    } else {
        if (photoId !== null) {
            loadCurrentPhoto();
        }

        let registerForm = document.getElementById("form-photo-upload");
        registerForm.onsubmit = handleSubmitedit;
        let deleteBtn = document.querySelector("#button-delete");
        deleteBtn.onclick = handleDelete;
    }
    


}

function handleSubmitedit(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    badwordsAPI.getAll()
        .then(badwords => {
            let errors = [];
            for (let badword of badwords) {
                console.log(badword);
                palabrasValidator.validatePalabras(errors, badword, formData);
            }
            if (errors.length === 0) {
                handleSubmitPhoto(formData);
            } else {
                messageRenderer.showErrorMessage("Moderate your language please");
            }
        }).catch(error => messageRenderer.showErrorMessage(error));
}

function loadCurrentPhoto() {

    let pageTitle = document.getElementById("page-title");
    let urlInput = document.getElementById("input-url");
    let titleInput = document.getElementById("input-title");
    let descriptionInput = document.getElementById("input-description");
    let visibilityInput = document.getElementById("input-visibility");
    pageTitle.textContent = " Editing a photo ";
    photosAPI.getById(photoId)
        .then(photos => {
            currentPhoto = photos[0];
            urlInput.value = currentPhoto.url;
            titleInput.value = currentPhoto.title;
            descriptionInput.value = currentPhoto.description;
            visibilityInput.value = currentPhoto.visibility;
        })
        .catch(error => messageRenderer.showErrorMessage(error));
}


function handleSubmitPhoto(formData) {

    if (currentPhoto === null) { // Creating a new photo
        // Add the current user 's ID
        formData.append("userId", sessionManager.getLoggedId());
        photosAPI.create(formData)
            .then(data => window.location.href = "index.html")
            .catch(error => messageRenderer.showErrorMessage(error));
    } else { // Updating an existing photo
        formData.append("userId", currentPhoto.userId);
        formData.append("date", currentPhoto.date);
        photosAPI.update(photoId, formData)
            .then(data => window.location.href = "index.html")
            .catch(error => messageRenderer.showErrorAsAlert(error));
    }
}



document.addEventListener("DOMContentLoaded", main);