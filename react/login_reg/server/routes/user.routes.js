const UserController = require('../controller/user.controller');

module.exports = (app) => {
    app.post("/api/user/register", UserController.register);
    app.post("/api/user/login", UserController.login);
    app.post("/api/user/logout", UserController.logout);

    // app.post('/api/user', userController.newUser);
    // app.get('/api/user', userController.showUser);
    // app.get('/api/user/:_id', userController.showOneuUser);
    // app.put('/api/user/:_id/', userController.updateUser);
    // app.delete('/api/user/:_id', userController.deleteUser);
};


// inside of user.routes.js
// const Users = require('../controllers/user.controller');
// const { authenticate } = require('../config/jwt.config');
// module.exports = app => {
//   app.post("/api/register", Users.register);
//   app.post("/api/login", Users.login);
//   // this route now has to be authenticated
//   app.get("/api/users", authenticate, Users.getAll);
// }

// const UserController = require("../controllers/user.controller");
// const jwtMiddleware = require("../middleware/jwt.middleware");

// module.exports = (app) => {
//     app.post("/api/register", UserController.register);
//     app.post("/api/login", UserController.login);
//     app.get("/api/protected", jwtMiddleware.authenticate);
//     app.post("/api/logout", UserController.logout);
// };