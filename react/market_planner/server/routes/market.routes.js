const MarketController = require('../controller/market.controller');


module.exports = function(app){
    app.get('/api', MarketController.index);
}
