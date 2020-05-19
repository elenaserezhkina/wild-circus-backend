const artistService = require("../services/artist");

const createArtist = async (req, res, next) => {
  console.log("req", req.body);
  try {
    const artist = await artistService.createLace({
      name: req.body.name,
      role: req.body.role,
      image: req.body.img,
    });
    res.status(200).json({ result: artist });
  } catch (err) {
    next(err);
  }
};

const getArtists = async (req, res, next) => {
  try {
    const artists = await artistService.getArtists();
    res.status(200).json({ result: artists });
  } catch (err) {
    next(err);
  }
};

const getArtistById = async (req, res, next) => {
  try {
    const artist = await artistService.getArtistById(req.params.id);
    res.status(200).json({ result: artist });
  } catch (err) {
    next(err);
  }
};

const deleteArtist = async (req, res, next) => {
  try {
    const artist = await artistService.deleteArtist(req.params.id);
    res.status(200).json({ result: "done", deleteArtist: artist });
  } catch (err) {
    next(err);
  }
};

const updateArtist = async (req, res, next) => {
  try {
    const artist = await artistService.updateArtist(req.params.id, req.body);
    res.status(200).json({ result: "done", updateArtist: artist });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createArtist,
  getArtists,
  getArtistById,
  deleteArtist,
  updateArtist,
};
