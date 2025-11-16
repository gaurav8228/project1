const express = require("express");
const router =  express.Router();
//const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controller/users.js");


router.route("/signup")
        .get(userController.signupPage)
        .post(wrapAsync(userController.registerUser));

router.route("/login")
            .get( userController.loginPage)
            .post(
    saveRedirectUrl,
    passport.authenticate("local" , {
         failureRedirect : '/login' , 
         failureFlash  : true,
        }) , 
        userController.loggedPage
    ); 

router.get("/logout" , userController.logoutPage);                 


module.exports = router;