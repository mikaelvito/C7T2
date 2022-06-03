const router = require("express").Router();
const pagesRouter = require("./pages");

router.use(pagesRouter);

module.exports = router;
