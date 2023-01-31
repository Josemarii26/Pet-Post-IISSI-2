" use strict ";



const palabrasValidator = {
        validatePalabras: function (errors, badword, formData) {

            let title = formData.get("title");
            let titles = title.toString();
            let titlesplit = titles.split(" ");
            let description = formData.get("description");
            let descriptions = description.toString();
            let descriptionsplit = descriptions.split(" ");

            for (let i = 0; i < titlesplit.length; i++) {
                let titu = titlesplit[i];
                for (let k = 0; k < descriptionsplit.length; k++) {
                    let desc = descriptionsplit[k];
                    
                    if (titu === badword.wordname || desc === badword.wordname) {

                        return errors.push("a")
                    }
                }
            }
        },
    };
        export {
            palabrasValidator
        };