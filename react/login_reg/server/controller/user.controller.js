const { request } = require("express");
const { model } = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const register = (req, res) => {
  console.log("in register");
  console.log(req.body);

  User.create(req.body)
    .then((newUser) => {
      console.log("successfully registered");
      console.log(newUser);
      res.json({
        msg: "success!",
        user: newUser,
      });
    })
    .catch((err) => {
      console.log("register not successful");
      res.status(400).json(err);
    });
};

// login
const login = (req, res) => {
    User.findOne({ email:req.body.email})
    .then((userRecord) => {
        // check if the return object is null
        if (userRecord === null) {
            // email was not found in the DB
            console.log("user email not found");
            res.status(400).json({message: "invalid login attempt"})
        } else {
            console.log("user email found");
            console.log(userRecord)
          // the email was found
          // compair the address given with the request with the one in the DB
            bcrypt.compare(req.body.password, userRecord.password)
                .then((isPasswordValid) => {
                    if(isPasswordValid){
                        console.log("password is valid");
                        console.log(userRecord);
                        console.log(process.env.FIRST_SECRET_KEY);
                        res.cookie("usertoken",
                            jwt.sign({
                                use_id: userRecord._id,
                                email: userRecord.email
                            },
                            process.env.FIRST_SECRET_KEY),
                            {
                                httpOnly: true,
                                expires: new Date(Date.now() + 900000)
                            }
                            )
                            .json({
                                message: "login successfull",
                                userLoggedIn: userRecord.firstName
                            })
                    } else {
                        // passwords didnt match
                        console.log("passwords dont match")
                        res.status(400).json({message: "invalid login attempt"})
                    }
                })
                .catch((err) => {
                    console.log("error compairing passwords");
                    res.status(400).json({message: "invalid attempt sub"})
                })
        }
    })
    .catch((err) => {
        console.log("error finding one user");
        res.status(400).json({message: "invalid login attempt"})
    });
};

const logout = (req, res) => {
    console.log("successfully logged out")
    res.clearCookie('usertoken');
    // res.sendStatus(200);
    res.json({
        message: "you have logged out",
    })
}


module.exports = {
  register,
  login,
  logout,
  // updateUser,
  // deleteUser,
};
