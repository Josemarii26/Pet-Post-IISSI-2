" use strict ";
import {
    parseHTML
} from "/js/utils/parseHTML.js";
import {
    usersAPI
} from "/js/api/users.js";

const photoRenderer = {
    asCard: function (photo) {
        let html = `<div class= " col-md-4 ">
                        <div class= " card1">
                            <div class= row  id="tarjeta1">
                                <div class = "col-md-12">
                                    <p class= " text-center user-name" id="user-nombre">${ photo.userId } </p >
                                    <a href= "photo_detail.html?photoId=${photo.photoId}">
                                    <img src= "${ photo.url }" class= " card-img-top ">
                                    </a >
                                    <div class= " card-body ">
                                        <h5 class= " card-title text-center ">${ photo.title }</h5 >
                                    </div>
                                </div >
                                
                            </div>
                        </div >   
                    </div >`;

        let card = parseHTML(html);
        loadUsernameCard(card, photo.userId);

        return card;
    },
    asCardIndex: function (photo) {
        let html = `<div class= " col-md-12 ">
                        <div class= " card ">
                            <div class= row id="tarjeta">
                                <div class = "col-md-1"></div >
                                <div class = "col-md-10">
                                <p class= " text-center user-name" id="user-nombre">${ photo.userId } </p >
                                <a href= "photo_detail.html?photoId=${photo.photoId}">
                                <img src= "${ photo.url }" class= " card-img-top ">
                                </a >
                                    <div class= " card-body ">
                                        <h5 class= " card-title text-center " id="titulito">${ photo.title }</h5 >
                                    </div>
                                </div >
                                <div class = "col-md-1"></div >
    
                                
                        </div>
                    </div >
                        
                    </div >`;

        let card = parseHTML(html);
        loadUsernameCard(card, photo.userId);

        return card;
    },
};

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