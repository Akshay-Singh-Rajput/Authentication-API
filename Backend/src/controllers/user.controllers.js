const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const router = express.Router();

const User = require('../model/user');


//* Register Route and Logic
router.post("/register", async (request, response) => {
    console.log('register hit');

    const { email, password } = request.body;
    let registerdUser = await User.findOne({ email: email });


    // * checking email
    if (registerdUser) {
        return response.status(400).send({ message: "Email already exists" });
    }
    let validateEmail = validator.isEmail(email);

    if (!validateEmail) {
        return response.status(400).send({ message: "Email is not valid" });
    }

    // hash the password
    bcrypt
        .hash(password, 10)
        .then((hashedPassword) => {
            // create a new user instance and collect the data
            const user = new User({
                email,
                password: hashedPassword,
            });

            // save the new user
            user
                .save()
                // return success if the new user is added to the database successfully
                .then((result) => {
                    response.status(201).send({
                        message: "User Created Successfully",
                        result,
                    });
                })
                // catch error if the new user wasn't added successfully to the database
                .catch((error) => {
                    response.status(500).send({
                        message: "Error creating user",
                        error: error.message
                    });
                });
        })
        // catch error if the password hash isn't successful
        .catch((e) => {
            response.status(500).send({
                message: "Password was not hashed successfully",
                e,
            });
        });


});

// login endpoint
router.post("/login", (request, response) => {
    // check if email exists
    User.findOne({ email: request.body.email })

        // if email exists
        .then((user) => {
            // compare the password entered and the hashed password found
            bcrypt
                .compare(request.body.password, user.password)

                // if the passwords match
                .then((passwordCheck) => {

                    // check if password matches
                    if (!passwordCheck) {
                        return response.status(400).send({
                            message: "Passwords does not match",
                            error,
                        });
                    }

                    //   create JWT token
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h" }
                    );

                    //   return success response
                    response.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                        token,
                    });
                })
                // catch error if password does not match
                .catch((error) => {
                    response.status(400).send({
                        message: "Passwords does not match",
                        error,
                    });
                });
        })
        // catch error if email does not exist
        .catch((e) => {
            response.status(404).send({
                message: "Email not found",
                e,
            });
        });
});


module.exports = router;