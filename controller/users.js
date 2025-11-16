const User = require("../models/user");

module.exports.signupPage = (req , res)=>{
    res.render("users/signup.ejs"); 
};

module.exports.registerUser = async (req, res, next) => {
 try{
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    let registeredUser =await User.register(newUser, password);
    console.log("✅ Registered User:", registeredUser);
    req.login(registeredUser , (err)=>{
        if(err){
            return next(err);
        }
    req.flash("successMsg", "Welcome to Wanderlust");
    res.redirect("/listings");
    })
   
 }
 catch(e){
    req.flash("errorMsg" ,e.message);   
    res.redirect("/signup");
 }
  
};

module.exports.loginPage =  (req , res) =>{
    res.render("users/login.ejs");
};


module.exports.loggedPage = async (req, res) => { 
    req.flash("success", "Welcome back to Wanderlust");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logoutPage = (req , res , next)=>{
    req.logOut((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","you are logged out");
        res.redirect("/listings");
    })
};