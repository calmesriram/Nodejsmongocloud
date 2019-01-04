var controllers = require('../Controllers/controllers')
module.exports = (app) =>{

    app.get('/',controllers.initial);
    app.post('/register',controllers.register);
}