const router = require("express").Router();
const bookRoutes = require("./books");
const newsRoutes = require("./news");

// Book routes
router.use("/books", bookRoutes);
router.use("/news", newsRoutes);

module.exports = router;
