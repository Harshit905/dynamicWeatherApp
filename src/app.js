const express=require("express");
const app=express();
const path=require("path");
// var hbs = require('hbs');
const hbs=require("hbs");
//code for hosting
const PORT=process.env.PORT || 8000;

//Code for serving static website using express js using path module.
const publicStaticPath=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
app.use(express.static(publicStaticPath));
// using Handle bars
app.set('view engine', 'hbs');
app.set('views',template_path);

//register partials
hbs.registerPartials(partials_path);
app.get("/",(req,res)=>{
    res.render("index");
    // res.send();
})
app.get("/about",(req,res)=>{
    res.render("about");
    // res.send();
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.status(404).render("404error",{
        errorMsg:"OOPS Page Not Found"
    })
    
})
app.listen(PORT,()=>{
    console.log(`localhost is running on server ${PORT}`);
})