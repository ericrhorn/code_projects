const ProjectController = require('../controllers/project.controller');  //Import the code from Code Block 1
const UserController = require('../controllers/user.controller');


module.exports = (app) => {
    // app.get('/api', ProjectController.index);
    app.post('/api/recipe/create-recipe', ProjectController.addRecipe);
    app.get('/api/recipe/show', ProjectController.showRecipe);
    app.get('/api/recipe/one:_id', ProjectController.showOneRecipe);
    app.put('/api/recipe/update:_id', ProjectController.updateRecipe);
    app.get('/api/recipe/delete:_id', ProjectController.deleteRecipe);
}