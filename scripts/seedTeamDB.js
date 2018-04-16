const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const teamSeed = [
  {
    name: "Jammula Someswar Rao",
    designation: "MD & Proprietor",
    description: "",
    displayseq: "",
    imgurl:"",
  },
  {
      name: "Jammula Kiran Kumar",
      designation: "Managing Partner",
      description: "",
      displayseq: "",
      imgurl:"",
  },
  {
      name: "Jammula Navin Kumar",
      designation: "Managing Partner",
      description: "",
      displayseq: "",
      imgurl:"",
  },
  {
    name: "",
    designation: "",
    description: "",
    displayseq: "",
    imgurl:"",
  },
  {
      name: "",
      designation: "Managing Partner",
      description: "",
      displayseq: "",
      imgurl:"",
  },
  {
      name: "",
      designation: "",
      description: "",
      displayseq: "",
      imgurl:"",
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
