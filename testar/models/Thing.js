const mongoose = require('mongoose');

// vår samling kommer heta things

// schemat är kring singular och beskriver en thing
const thingSchema = new mongoose.Schema({
    // våra fält i databasen
    title: { type: String },
    age: { type: Number },
    alive: { type: Boolean },
    
    // array med strängar i
    owners: [{ type: String}],
});

// 'Thing' avgör namnet på samlingen 
module.exports = mongoose.model('Thing', thingSchema);