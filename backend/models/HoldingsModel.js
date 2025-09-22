const {  model } = require('mongoose');
const{ holdingSchema } = require('../schemas/holdingSchema'); 

const HoldingsModel = new model('Holding', holdingSchema);

module.exports = { HoldingsModel };
