" use strict ";
import {
    parseHTML
} from "/js/utils/parseHTML.js";
import {
    usersAPI
} from "/js/api/users.js";

const photoRenderer = {
    asCard: function (photo) {
        let html = `<div class= " col-md-12 ">
                        <div class= " card ">
                            <div class= row id="tarjeta">
                                <div class = "col-md-9">
                                <p class= " text-center user-name" id="user-nombre">${ photo.userId } </p >
                                <a href= "photo_detail.html?photoId=${photo.photoId}">
                                <img src= "${ photo.url }" class= " card-img-top ">
                                </a >
                                    <div class= " card-body ">
                                        <h5 class= " card-title text-center " id="titulito">${ photo.title }</h5 >
                                    </div>
                                </div >
                                
                        </div>
                    </div >
                        
                    </div >`;
        
        let card = parseHTML(html);
        loadUsernameCard(card, photo.userId);

        return card;
    },
    
    asDetails: function (photo) {
        let html = `<div class= " photo-details ">
                        <div class= row id="fotodetalle">
                                <div class = "col-md-8">
                                    <img src= "${ photo.url }" class= " img-fluid ">
                                </div>
                                <div class = "col-md-4" id="comments">
                                    <h3 >${ photo.title } </h3 >
                                    <h6 >${ photo.description } </h6 >
                                    <p class= " text-left link "> ${photo.userId}</p>
                                    <p class= " text-left link "> ${photo.date}</p>
                                </div>

                            </div>
                        
                    </div >`;
        let photoDetails = parseHTML(html);
        loadUsernameDetail(photoDetails, photo.userId);

        return photoDetails;
    },
};

function loadUsernameDetail(photoDetails, userId) {
    usersAPI.getById(userId)
        .then(users => {
            let username = users[0].username;
            let p = photoDetails.querySelector("p.link");
            p.textContent = "@" + username;
        });
}

function loadUsernameCard(card, userId) {
    usersAPI.getById(userId)
        .then(users => {
            let username = users[0].username;
            let p = card.querySelector("p.user-name");
            p.textContent = "@" + username;
        });
}

export {
    photoRenderer
};