" use strict ";

import {
    messageRenderer
} from "/js/renderers/messages.js";
import {
    userValidator
} from "/js/validators/users.js";
import {
    sessionManager
} from "/js/utils/session.js";
import {
    authAPI
} from "/js/api/auth.js";



function main() {
    let registerForm = document.getElementById("register-form");
    registerForm.onsubmit = handleSubmitRegister;
}

function handleSubmitRegister(event) {
    let form = event.target;
    let formData = new FormData(form);
    event.preventDefault();

    let errors = userValidator.validateRegister(formData);

    if (errors.length === 0) {
        sendRegister(formData);
    } else {
        let errorsDiv = document.getElementById("errors");
        errorsDiv.innerHTML = "";
        for (let error of errors) {
            messageRenderer.showErrorMessage(error);
        }
    }
}

function sendRegister(formData) {
    authAPI.register(formData)
        .then(loginData => {
            let sessionToken = loginData.sessionToken;
            let loggedUser = loginData.user;
            sessionManager.login(sessionToken, loggedUser);
            window.location.href = "index.html";
        })
        .catch(error => messageRenderer.showErrorMessage(error));
}




document.addEventListener("DOMContentLoaded", main);