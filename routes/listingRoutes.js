const express = require("express");
const router =  express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn , isOwner , validateListing} = require("../middleware.js");
const listingController = require("../controller/listings.js");
const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

   
router.route("/")
        .get( wrapAsync(listingController.index))
        .post( isLoggedIn  , upload.single("listing[image]")  ,wrapAsync ( listingController.createNewListing));
      

  //new route
router.get('/new',  isLoggedIn , listingController.renderNewForm);


router.route("/:id")
      .get( wrapAsync(listingController.showListings))  
      .put( isLoggedIn, isOwner , upload.single("listing[image]") , validateListing , wrapAsync ( listingController.editListing) )
      .delete( isLoggedIn , isOwner  ,wrapAsync( listingController.deleteListing)) ;

      //update(edit) route
router.get("/:id/edit" , isLoggedIn , isOwner ,wrapAsync (listingController.editForm));
    

module.exports = router;
