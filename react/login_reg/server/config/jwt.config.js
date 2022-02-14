const jwt = require("jsonwebtoken");
const secret = "I can't believe this key is so secret!";
module.exports.secret = secret;
module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
    if (err) { 
      res.status(401).json({verified: false});
    } else {
      next();
    }
  });
}

// const jwt = require("jsonwebtoken");


// const authenticate = (req, res, next) => {
//     jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err) => {
//     if (err) {
//         console.log("user not authenticated");
//         res.status(401).json({ verified: false });
//     } else {
//         console.log("user is authenticated");
//         next();
//     }
// });
// };

// module.exports = {
//     authenticate,
// };