const express = require("express");
const router = express.Router();
const showController = require("../controllers/show");

router.post("/", showController.createShow);
router.get("/", showController.getShows);
router.get("/:id", showController.getShowById);
router.delete("/:id", showController.deleteShowById);
router.patch("/:id", showController.updateShowById);

// router.get("/shows/:id/reviews", showController.getShowReviews);
router.post("/:id/reviews", showController.createShowReview);

module.exports = router;
