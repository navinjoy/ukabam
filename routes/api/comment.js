const router = require("express").Router();
const commentController = require("../../controllers/commentController");

// Matches with "/api/books"
router.route("/")
  .get(commentController.findAll)
  .post(commentController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
