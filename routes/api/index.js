const router = require("express").Router();
const bookRoutes = require("./books");
const newsRoutes = require("./news");
const commentRoutes = require("./comment");

// Book routes
router.use("/books", bookRoutes);
router.use("/news", newsRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
