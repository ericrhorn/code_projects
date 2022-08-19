// const { request } = require("express");
// const { model } = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const SECRET = process.env.FIRST_SECRET_KEY;




const register = async (req, res) => {
    try {
        const user = new User(req.body)
        const newUser = await user.save();
        console.log("new user", newUser);
        const userToken = jwt.sign({
            _id: newUser._id,
            email: newUser.email,
            userName: newUser.userName,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
        }, SECRET);
        console.log('jst', userToken);
        res
        .status(201)
        .cookie('userToken', userToken, {
            httpOnly: true
        })
        .json({
            msg: "success!",
            user: newUser,
        });
    } catch(error){
    console.log("register not successful", error);
    res.status(400).json(error);
    };
}

const login = async (req, res) => {
    const userRecord = await User.findOne({email: req.body.email});
    console.log("user record", userRecord);
    if (!userRecord) {
        res.status(400).json({error: "invalid email or password"});
    } else {
        try {
            const isPasswordValid = await bcrypt.compare(req.body.password, userRecord.password);
            if(!isPasswordValid){
                res.status(400).json({error: "invalid email or password"});
            } else {
                const userToken = jwt.sign ({
                    _id: userRecord._id,
                    email: userRecord.email,
                    userName: userRecord.userName,
                    firstName: userRecord.firstName,
                    lastName: userRecord.lastName,
                }, SECRET);
                console.log("jwt", userToken)
                res
                .status(201)
                .cookie('userToken', userToken, {
                    httpOnly: true
                })
                .json({
                    msg: "successfully logged in!",
                    user: userRecord,
                });
            }
        } catch (error) {
            console.log('login error', error)
            res.status(400).json({error: "invalid email or password"});
        }
    }
}


// const register = (req, res) => {
//   console.log("in register");
//   console.log(req.body);

//   User.create(req.body)
//     .then((newUser) => {
//       console.log("successfully registered");
//       console.log(newUser);
//     const userToken = jwt.sign({
//         _id: newUser._id,
//         email: newUser.email,
//         userName: newUser.userName,
//         firstName: newUser.firstName,
//         lastName: newUser.lastName,
//     }, SECRET)
//     res
//     .status(201)
//     .cookie('userToken', userToken, {
//         httpOnly: true
//     })
//     .json({
//         msg: "success!",
//         user: newUser,
//     });
//     })
//     .catch((err) => {
//     console.log("register not successful", err);
//     res.status(400).json(err);
//     });
// };



// login
// const login = (req, res) => {
//     User.findOne({ email:req.body.email})
//     .then((userRecord) => {
//         // check if the return object is null
//         if (userRecord === null) {
//             // email was not found in the DB
//             console.log("user email not found");
//             res.status(400).json({message: "invalid login attempt"})
//         } else {
//             console.log("user email found");
//             console.log(userRecord)
//           // the email was found
//           // compair the address given with the request with the one in the DB
//             bcrypt.compare(req.body.password, userRecord.password)
//                 .then((isPasswordValid) => {
//                     if(isPasswordValid){
//                         console.log("password is valid");
//                         console.log(userRecord);
//                         const userToken = jwt.sign({
//                             _id: userRecord._id,
//                             email: userRecord.email,
//                             firstName: userRecord.firstName,
//                             firstName: userRecord.firstName,
//                             lastName: userRecord.lastName
//                         }, SECRET)
//                         res
//                         .status(201)
//                         .cookie('userToken', userToken, {
//                             httpOnly: true
//                         })
//                         .json({
//                             msg: "success!",
//                             user: newRecord,
//                         });
//                     } else {
//                         // passwords didnt match
//                         console.log("passwords dont match")
//                         res.status(400).json({message: "invalid login attempt"})
//                     }
//                 })
//                 .catch((err) => {
//                     console.log("error compairing passwords", err);
//                     res.status(400).json({message: "invalid attempt sub"})
//                 })
//         }
//     })
//     .catch((err) => {
//         console.log("error finding one user", err);
//         res.status(400).json({message: "invalid login attempt"})
//     });
// };

const logout = (req, res) => {
    console.log("successfully logged out")
    res.clearCookie('userToken');
    // res.sendStatus(200);
    res.json({
        message: "you have logged out",
    })
}

const getLoggedInUser = (req, res) => {
    const user = jwt.verify(req.cookies.userToken, SECRET);

    User.findById({_id:user._id})
        .then((user) => res.json(user))
        .catch((err) => res.json({ message: "uh oh... cant show logged in user", error: err }));
};


module.exports = {
  register,
  login,
  logout,
  getLoggedInUser,
  // deleteUser,
};
