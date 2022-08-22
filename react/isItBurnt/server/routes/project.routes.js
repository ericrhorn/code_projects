const ProjectController = require('../controllers/project.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', ProjectController.index);
}