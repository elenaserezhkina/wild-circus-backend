const express = require("express");
const router = express.Router();
const showController = require("../controllers/show");

router.post("/shows", showController.createShow);
router.get("/shows", showController.getShows);
router.get("/shows/:id", showController.getShowById);
router.delete("/shows/:id", showController.deleteShowById);
router.patch("/shows/:id", showController.updateShowById);

router.get("/shows/:id/reviews", showController.getShowReviews);
router.post("/shows/:id/reviews", showController.createShowReview);

module.exports = router;
