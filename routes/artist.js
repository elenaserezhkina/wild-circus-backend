const express = require("express");
const router = express.Router();
const artistController = require("../controllers/artist");

router.post("/", artistController.createArtist);
router.get("/", artistController.getArtists);
router.get("/:id", artistController.getArtistById);
router.delete("/:id", artistController.deleteArtistById);
router.patch("/:id", artistController.updateArtistById);

module.exports = router;
