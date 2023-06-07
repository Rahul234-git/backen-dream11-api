const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    team:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("teamDataHandel",TeamSchema,"team");