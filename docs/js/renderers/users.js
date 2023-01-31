" use strict ";
import {
    parseHTML
} from "/js/utils/parseHTML.js";

const userrenderer = {
    info: function (user) {
        let html= `
        <div class= " col-md-12 " id="cabecera">
        <div class= "row" >
            <div class= " col-md-3 ">
            </div >
            <div class= " col-md-4">
                <p id = "user-name">@${user.username}</p>
            </div >
        </div >`
        ;
        let card = parseHTML(html);
        return card;
    },
    info2: function (user) {
        let html= `
        <div class= " col-md-12 " id="cabecera">
        <div class= "row text-center " >
        <div class="col-md-4">
                <img src="${user.avatarUrl}" class="img-responsive" id="imagen_perfil_username">
            </div>
            <div class= " col-md-4 ">
                <p id = "user-firstname">${user.firstName}</p>
                <p id = "user-firstname">${user.email}</p>
                </div >
            <div class= " col-md-4 ">    
            <p id = "user-firstname">${user.lastName}</p>
                <p id = "user-firstname">${user.telephone}</p>
            </div >
            
            
        </div >`
        ;
        let card = parseHTML(html);
        return card;
    }
}
export {
    userrenderer
};
