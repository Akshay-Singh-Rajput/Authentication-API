const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

const User = require('../model/user');


//* Register Route and Logic
router.post("/register", async (req, res) => {
    console.log('register hit');
    try {

        // Get user Inputs
        const { first_name, last_name, email, password } = req.body;

        // Validate user input
        if (!(email && password && first_name)) {
            res.status(400).send('All input is required*');
        }

        // If user already exist in our database
        const olduser = await User.findOne({ email });

        if (olduser) {
            return res.status(400).send("User Already Exist. Please Login");
        }


        // Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);


        // Creating user in our database
        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });


        // Create token

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        // save user token
        user.token = token;

        //return new user
        res.status(201).json(user);

    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

//* Login Route and Logic
router.post("/login", async (req, res) => {
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required*");
        }

        // Validate if user exits in our database
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password)))

        // Create token

      
    }catch (error) {
        console.error(error.message);
    }
});


module.exports = router;