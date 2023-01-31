" use strict ";

import {
    photoRenderer
} from "/js/renderers/photos.js";
import {
    valorationrenderer
} from "/js/renderers/valorations.js";
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
    valorationsAPI
} from "/js/api/valorations.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");


function main() {
    
    let photoContainer = document.querySelector("#photo-details-column");
    photosAPI.getById(photoId)
        .then(photos => {
            let photoDetails = photoRenderer.asDetails(photos[0]);
            photoContainer.appendChild(photoDetails);
            console.log(photoDetails);
            hideEditOptions(photos[0]);
        })
        .catch(error => messageRenderer.showErrorMessage(error));
        

       let deleteBtn = document.querySelector("#button-delete");
       deleteBtn.onclick = handleDelete;
    
       let editBtn = document.querySelector("#button-edit");
        editBtn.onclick = handleEdit;

        let valorationsContainer = document.querySelector("#rate-now");

        valorationsAPI.getavg(photoId)
        
        .then(valorations => {
            
            if (valorations[0].Media == null) {
                let valoration = valorationrenderer.valorationrenderernull();
                valorationsContainer.appendChild(valoration);
                console.log(valoration);

            } else {
                let valoration = valorationrenderer.valorationrenderer(valorations[0].Media);
                valorationsContainer.appendChild(valoration);
                console.log(valoration);

            }
        })
        .catch(error => messageRenderer.showErrorMessage(error));

    
    
    hideActionsColumn();
    //hideHeaderOptions();
    //hideEditOptions();


    let registerForm = document.getElementById("form-rate");
    registerForm.onsubmit = valorations;
    
}

function handleEdit(event) {
    window.location.href = "edit_photo.html?photoId=" + photoId;
};

function valorations(event){
    debugger;
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let photo1Id = photoId.valueOf();
    let user1Id = sessionManager.getLoggedId().valueOf();
    valorationsAPI.getcount(user1Id, photo1Id)
        .then(valorations => {
            debugger;
            let count = valorations[0].contador;
            if (count === 0){
                formData.append("userId", user1Id);
                formData.append("photoId", photo1Id);
                valorationsAPI.create(formData)
                    .then(data => window.location.href = "index.html")
                    .catch(error => messageRenderer.showErrorMessage(error));
            }else if (count === 1){
                valorationsAPI.getvalorationbyid(user1Id, photo1Id)
                .then(valorations => {
                    valorationsAPI.update(valorations[0].valorationId, formData)
                    .then(data => window.location.href = "index.html")
                    .catch(error => messageRenderer.showErrorMessage(error));
                })

            }
        })
}


function handleDelete(event) {
    let answer = confirm("Do you really want to delete this photo ?");
    if (answer) {
        photosAPI.delete(photoId)
            .then(data => window.location.href = "index.html")
            .catch(error => messageRenderer.showErrorMessage(error));
    }
}

function hideActionsColumn() {
    let EditPhoto = document.getElementById("button-edit");
    let DeletePhoto = document.getElementById("button-delete");

    if (!sessionManager.isLogged()) {
        EditPhoto.style.display = "none";
        DeletePhoto.style.display = "none";
    }
}

function hideHeaderOptions() {
    let headerRegister = document.getElementById("navbar-register");
    let headerLogin = document.getElementById("navbar-login");
    let headerLogout = document.getElementById("navbar-logout");
    let headerRecent = document.getElementById("navbar-recent");
    let headerCreate = document.getElementById("navbar-create");
    let headerProfile = document.getElementById("navbar-profile");
    let headerRegister2 = document.getElementById("dropdown1");
    let headerLogin2 = document.getElementById("dropdown2");
    if (sessionManager.isLogged()) {
        headerRegister.style.display = "none";
        headerLogin.style.display = "none";
        headerRegister2.style.display = "none";
        headerLogin2.style.display = "none";
    } else {
        headerCreate.style.display = "none";
        headerLogout.style.display = "none";
        headerProfile.style.display = "none";
    }

}

function hideEditOptions(photo) {
    let EditPhoto = document.getElementById("button-edit");
    let DeletePhoto = document.getElementById("button-delete");
    let ValoratePhoto = document.getElementById("valorar")
    if (sessionManager.isLogged()) {
        if (sessionManager.getLoggedId() != photo.userId) {
            EditPhoto.style.display = "none";
            DeletePhoto.style.display = "none";

        }
    }else{
        ValoratePhoto.style.display = "none";
        messageRenderer.showErrorMessage("You must be registered to rate a photo :(")
    }


};



document.addEventListener("DOMContentLoaded", main);