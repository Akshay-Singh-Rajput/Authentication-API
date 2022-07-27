const express = require('express');
const userController = require('./controllers/user.controllers');
const auth = require("./middleware/auth");
const app = express();
app.use(express.json());

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

//check server running
app.get("/", (request, response, next) => {
    response.json({ message: "Hey! This is your server response!" });
    next();
});


// free endpoint
app.get("/free-endpoint", (request, response) => {
    response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint 
app.get("/auth-endpoint", auth, (request, response) => {
    let email = request.user.userEmail;
    response.json({ email, message: "You are authorized to access me" });
});


// User Controller login Signup
app.use("/api", userController);


module.exports = app;