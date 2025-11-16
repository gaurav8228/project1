import Listing from "../models/listing.js";
import { getCoordinates } from "../utils/geocode.js";

export const index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listing/index.ejs", { allListings });
};

export const renderNewForm = (req, res) => {
  res.render("listing/new.ejs");
};

export const showListings = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

  if (!listing) {
    req.flash("errorMsg", "Your listing does not exist!");
    return res.redirect("/listings");
  }

  res.render("listing/show.ejs", { listing });
};

export const createNewListing = async (req, res, next) => {
  const address = req.body.listing.location;

  const coords = await getCoordinates(address);
  console.log("Coordinates:", coords);

  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  // Save coordinates
  newListing.geometry = {
    type: "Point",
    coordinates: [coords.lng, coords.lat],
  };

  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

export const editForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Your listing does not exist!");
    return res.redirect("/listings");
  }

  let originalUrl = listing.image.url;
  originalUrl = originalUrl.replace("/upload", "/upload/h_300,w_250");

  res.render("listing/edit.ejs", { listing, originalUrl });
};

export const editListing = async (req, res) => {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  let { id } = req.params;

  let updatedListing = await Listing.findByIdAndUpdate(id, {
    ...req.body.listing,
  });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    updatedListing.image = { url, filename };
    await updatedListing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

export const deleteListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
