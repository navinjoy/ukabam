const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  description: String,
  displayseq: Number,
  imgpath: String
  
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
