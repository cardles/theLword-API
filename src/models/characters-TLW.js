// aqui farei o scheme e o model em mongoose

const mongoose = require("mongoose");

const charactersSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String},
    presentIn: {type: Array},
    about: {type: String},
    sexualOrientation: {type: String},
    occupation: {type: String},
    portrayedBy: {type: String},
    iLove: {type: Boolean}
}, {
    versionKey: false
});


const characters = mongoose.model("character", charactersSchema);


module.exports = characters;