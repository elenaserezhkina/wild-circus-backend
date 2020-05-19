const ShowSchema = require("../models/show");

const createShow = async (reqBody) => {
  const show = await ShowSchema.create(reqBody);
  return show;
};

const getShows = async () => {
  const shows = await ShowSchema.find();
  return shows;
};

const getShowById = async (showId) => {
  const show = await ShowSchema.findById(showId);
  if (!show) {
    throw new Error("Not found");
  }
  return show;
};

const deleteShow = async (showId) => {
  const show = await getShowById(showId);
  await show.remove();
  return show;
};

const updateShow = async (showId, updateParam) => {
  const show = await getShowById(showId);
  Object.assign(show, updateParam);
  await show.save();
  return show;
};

const createShowReview = async (showId, review) => {
  const show = await getShowById(showId);
  show.reviews.push(review);
  await show.save();
  return show.reviews[show.reviews.length - 1];
};

module.exports = {
  createShow,
  getShows,
  getShowById,
  deleteShow,
  updateShow,
  createShowReview,
};
