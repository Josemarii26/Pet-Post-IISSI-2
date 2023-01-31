" use strict ";
import {
    parseHTML
} from "/js/utils/parseHTML.js";

const valorationrenderer = {
    valorationrenderer: function (rate) {
        let html= `
        <div class= " col-md " >
        <h3>Global rate:</h3><h3>${rate}</h3>
        </div >`
        ;
        let card = parseHTML(html);
        return card;
    },
    valorationrenderernull: function () {
        let html= `
        <div class= " col-md " ><br>
        There is no rating for this photo yet,
        be the first one!
        <br>
        </div >`    
        
        ;
        let card = parseHTML(html);
        return card;
    }
}
export {
    valorationrenderer
};