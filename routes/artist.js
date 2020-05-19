const express = require("express");
const router = express.Router();
const artistController = require("../controllers/artist");

router.post("/artists", artistController.createArtist);
router.get("/artists", artistController.getArtists);
router.get("/artists/:id", artistController.getArtistById);
router.delete("/artists/:id", artistController.deleteArtistById);
router.patch("/artists/:id", artistController.updateArtistById);

module.exports = router;
