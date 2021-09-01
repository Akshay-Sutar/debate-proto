const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
  res.render("index.ejs", { user: "AAS" });
});
router.use(require("./user.route"));

module.exports = router;
