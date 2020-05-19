const ArtistSchema = require("../models/artist");

const createArtist = async (reqBody) => {
  const artist = await ArtistSchema.create(reqBody);
  return artist;
};

const getArtists = async () => {
  const artists = await ArtistSchema.find();
  return artists;
};

const getArtistById = async (artistId) => {
  const artist = await ArtistSchema.findById(artistId);
  if (!artist) {
    throw new Error("Not found");
  }
  return artist;
};

const deleteArtist = async (artistId) => {
  const artist = await getArtistById(artistId);
  await artist.remove();
  return artist;
};

const updateArtist = async (artistId, updateParam) => {
  const artist = await getArtistById(artistId);
  Object.assign(artist, updateParam);
  artist.save();
  return artist;
};

module.exports = {
  createArtist,
  getArtists,
  getArtistById,
  deleteArtist,
  updateArtist,
};
