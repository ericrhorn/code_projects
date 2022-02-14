const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "A first name is required"],
      minLength: [2, "A first must be at least 2 characters"],
    },
    firstName: {
    type: String,
    required: [true, "A last name is required"],
    minLength: [2, "A first must be at least 2 characters"],
    },
    email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val), 
        message: "Please enter a valid email"
    }
    },
    password: {
    type: String,
    required: [true, "password is required"],
    minLength: [8, "password must be at least 8 characters"]
    }
  },
  { timestamps: true }
);

userSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

userSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
    });

userSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});




const Product = mongoose.model("User", userSchema);

module.exports = User;
