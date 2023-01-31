" use strict ";


const userValidator = {
    validateRegister: function (formData) {
        let errors = [];
        let firstName = formData.get("firstName");
        let lastName = formData.get("lastName");
        let email = formData.get("email");
        let tlfn = formData.get("telephone");
        let username = formData.get("username");
        let password = formData.get("password");
        let password2 = formData.get("password2");

        if (firstName.length < 3 || lastName.length < 3) {
            errors.push("The first and last name should have more than 3 characters");
        }
        if (password.length < 6 || password2.length < 6) {
            errors.push("The password should have more than 6 characters");
        }
        if (password !== password2) {
            errors.push("The passwords must match ");
        }

        if(tlfn.lenght< 8 ){
            errors.push("Your phone number should have more than 8 characters");
        }
        
        return errors;
    },
    validateLogin: function (formData) {
        let errors = [];
        let username = formData.get("username");
        let password = formData.get("password");


        if (username.length == 0 || password.length  == 0) {
            errors.push("You have an empty field");
        }
       
        
        return errors;
    }
    
};
export {
    userValidator
};