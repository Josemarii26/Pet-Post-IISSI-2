" use strict ";
import {
    parseHTML
} from "/js/utils/parseHTML.js";
import {
    photoRenderer
} from "/js/renderers/photos_user.js";



const galleryRendererA = {
    asCardGalleryA: function (user, photos) {
        let galleryContainer = parseHTML('<div class= " photo-gallery "id ="gallery-user"> </div > ');
        let row = parseHTML('<div class= " row "> </div > ');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let photo of photos) {
            if (user == photo.userId) {
                let card = photoRenderer.asCard(photo);
                row.appendChild(card);
                counter += 1;
                if (counter % 3 === 0) {
                    row = parseHTML('<div class= " row "> </div > ');
                    galleryContainer.appendChild(row);
                }
            }
        }
        return galleryContainer;
    }
    };
const galleryRendererB = {
    asCardGalleryB: function (photos) {
        let galleryContainer = parseHTML('<div class= " photo-gallery " > </div > ');
        let row = parseHTML('<div class= " row "> </div > ');
        galleryContainer.appendChild(row);
        let counter = 0;
        let visiv = "Public";
        for (let photo of photos) {
            let visibiliti = photo.visibility;
            console.log(visibiliti);
            if (visibiliti === visiv) {
                    let card = photoRenderer.asCard(photo);
                    row.appendChild(card);
                    counter += 1;
                    if (counter % 3 === 0) {
                        row = parseHTML('<div class= " row "> </div > ');
                        galleryContainer.appendChild(row);
                    }
                
            }
        }
        return galleryContainer;
    }
};

    const galleryRendererBIndex = {
        asCardGalleryBIndex: function (photos) {
            let galleryContainer = parseHTML('<div class= " photo-gallery " > </div > ');
            let row = parseHTML('<div class= " row "> </div > ');
            galleryContainer.appendChild(row);
            let counter = 0;
            let visiv = "Public";
            for (let photo of photos) {
                let visibiliti = photo.visibility;
                console.log(visibiliti);
                if (visibiliti === visiv) {
                    
                        let card = photoRenderer.asCardIndex(photo);
                        row.appendChild(card);
                        counter += 1;
                        if (counter % 1 === 0) {
                            row = parseHTML('<div class= " row "> </div > ');
                            galleryContainer.appendChild(row);
                        }
                    
                }
            }
            return galleryContainer;
        }

};
export {
    galleryRendererA
    

};
export {
    galleryRendererB
    

};
export {
    galleryRendererBIndex
    

};