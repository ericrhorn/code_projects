const ProfileController = require('../controller/profile.controller');
module.exports = function(app){
    app.get('/api', ProfileController.index);
}