    if(process.env.NODE_ENV != "production"){
        require('dotenv').config();
    }
    
    const express = require("express");
    const app = express();
    const mongoose = require("mongoose");
    
    const dbUrl =  process.env.ATLASDB_URL;
    const path = require("path");
    const methodOverride = require("method-override");
    const ejsMate = require("ejs-mate");
    const ExpressError = require("./utils/ExpressError");
    const { error } = require("console");
    const session = require("express-session");
    const MongoStore = require('connect-mongo');

    const listingRoutes = require("./routes/listingRoutes.js");
    const reviewRoutes = require("./routes/reviewRoutes.js");
    const userRoutes = require("./routes/userRoutes.js")

    const flash = require("connect-flash");
    const passport = require("passport");
    const LoacalPassport = require("passport-local");
    const User = require("./models/user.js");

    app.set("view engine", "ejs");
    app.set("views" , path.join(__dirname , "views"));
    app.use(express.urlencoded({extended:true}));
    app.use(methodOverride("_method"));
    app.engine("ejs", ejsMate);
    app.use(express.static(path.join(__dirname,"/public")));

    main().then(()=>{
        console.log("Connected to DB");
    }).catch((err)=>{
        console.log(err);
    })

    async function main(){
        await mongoose.connect(dbUrl);
    }

    
    // app.get("/",(req , res)=>{
    //     res.send("Hi , I am root");
    // });

     const store =  MongoStore.create({
        mongoUrl : dbUrl,
        crypto : {
            secret :  process.env.SECRET,
        },
        touchAfter : 24 * 3600,
    });

    store.on("error" , ()=>{
        console.log("ERROR in MONGO SESSION STORE", err);
    });

  const sessionOptions = {
    store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge :  7 * 24 * 60 * 60 * 1000   
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LoacalPassport(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ✅ FIXED: currUser must come AFTER passport.session()
app.use((req, res, next) => {
    res.locals.currUser = req.user || null;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

    // //fake user

    // app.get("/fakeuser" ,async (req , res)=>{
    //     let fakeUser = new User({
    //         email:"gauravmandal18@gmail.com",
    //         username:"gaurav_8228",
    //     });
    //     let registeredUser =await User.register(fakeUser , "ninjaad3d");
    //     res.send(registeredUser);
    // });

   //listing route

    app.use("/listings" , listingRoutes);


    //reviews route

    app.use("/listings/:id/reviews" , reviewRoutes);
   
    //user route

    app.use("/" , userRoutes);


    app.all(/.*/, (req, res, next) => {
        next(new ExpressError(404, "Page not found"));
    });

    
    app.use((err,req,res,next)=>{
        const {status = 500 , message = "Something went wrong"} = err;
        //res.status(status).send(message);
        res.status(status).render("error.ejs",{message});
    })

   app.listen(8080, ()=>{
        console.log("server is listning on port 8080");
    })

    // app.get("/testListing" , async(req, res)=>{
    //     let sampleListing = new Listing({
    //         title: "My new Villa",
    //         description:  " By the beach of fishes",
    //         price :1500,
    //         location:"lonavla",
    //         country:"India"
    //     });
    //     await sampleListing.save();
    //     console.log("Sample was saved");
    //     res.send("succesful testing");
    // })
