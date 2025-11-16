const mongoose = require("mongoose");
const Review = require("./reviews");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        required:true,
        type:String
    },
    description : String,
    
   image: { 
    url: String,
    fileName: String,
},

    price: Number,
    location : String,
    country : String,

    reviews : [
            {
                type: Schema.Types.ObjectId,
                ref : "Review"
            }
    ],
    owner : {
       type: Schema.Types.ObjectId,
       ref : "User",
    },
   geometry: {
  type: {
    type: String,
    enum: ["Point"],
    default: "Point"
  },
  coordinates: {
    type: [Number],
    default: [0, 0]
  }
}

});


listingSchema.pre("findOneAndDelete", async function (next) {
  const id = this.getQuery()._id;  // get the ID from the query
  const listing = await this.model.findById(id);
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
  next();
});



const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;