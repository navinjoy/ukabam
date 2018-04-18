const db = require("../models");

// Defining methods for the Comment Controller
module.exports = {
  findAll: function(req, res) {
    db.ProductOrder
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.ProductOrder
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
