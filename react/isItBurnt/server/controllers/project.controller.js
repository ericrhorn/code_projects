// const { request } = require("express");
// const { model } = require("mongoose");
const Recipe = require("../models/project.models");

const addRecipe = (req, res) => {
  Recipe.create(req.body)
    .then((newRecipe) => res.json(newRecipe))
    .catch((err) => res.status(400).json(err));
};

const showRecipe = (req, res) => {
  Recipe.find({})
    // .collation({ locale: "en", strength: 2 })
    // .sort({ petType: 1 })
    .then((allRecipies) => res.json(allRecipies))
    .catch((err) => res.status(400).json(err));
};

const showOneRecipe = (req, res) => {
  Recipe.findOne({ _id: req.params._id })
    .then((oneRecipe) => res.json(oneRecipe))
    .catch((err) => res.status(400).json(err));
};

const updateRecipe = (req, res) => {
  Recipe.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedRecipe) => res.json(updatedRecipe))
    .catch((err) => res.status(400).json(err));
};

const deleteRecipe = (req, res) => {
  Recipe.deleteOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
};

module.exports = {
    addRecipe,
    showRecipe,
    showOneRecipe,

    updateRecipe,
    deleteRecipe,
};
