const Review = require("../models/reviews");
const Listing = require("../models/listing");


module.exports.createNewReview = async (req, res) => 
    {
    const listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    await newReview.save();

    listing.reviews.push(newReview);
  
    await listing.save();
    req.flash("success" , "New Review Created!");
    res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteReview = async (req , res)=>{
        let { id , reviewId} = req.params;
        //pull for match and delete
        await Listing.findByIdAndUpdate(id ,  {$pull: {reviews : reviewId}});
        await Review.findByIdAndDelete(reviewId);
        req.flash("success" , " Review Deleted!");
        res.redirect(`/listings/${id}`);
};