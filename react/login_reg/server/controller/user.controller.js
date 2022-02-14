// module.exports.index = (req, res) => {
//     res.json({
//        message: "Hello World"
//     });
// }

const { request } = require("express");
const { model } = require("mongoose");
const User = require("../models/user.model");

const newUser = (req, res) => {
    User.create(req.body)
        .then((newUser) => res.json({ msg: "success!", user: newUser }))
        .catch((err) => res.json({ message: "uh oh cant make a new user", error: err }));
};

const showUsers = (req, res) => {
    User.find({})
        .then((allUsers) => res.json(allUsers))
        .catch((err) => res.json({ message: "uh oh cant show users", error: err }));
};

const showOneUser = (req, res) => {
    User.findOne({_id: req.params._id})
        .then((oneUser) => res.json(oneUser))
        .catch((err) => res.json({ message: "uh oh... cant show a user", error: err }));
};

const updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json({ message: "Something went wrong with edit", error: err }));
};

const deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params._id })
        .then(result => res.json(result))
        .catch(err => res.json({ message: "Something went wrong with delete", error: err }));
};

module.exports = {
    showUsers,
    showOneUser,
    newUser,
    updateUser,
    deleteUser,
}