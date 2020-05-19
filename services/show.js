const ShowSchema = require("../models/show");

const createShow = async (reqBody) => {
  const show = await ShowSchema.create(reqBody);
  return show;
};

const getShow = async () => {
  const show = await ShowSchema.find();
  return show;
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
  show.save();
  return show;
};

const createShowReview = async (showId) => {
  const show = await ShowSchema.findById(showId);
  if (!show) {
    throw new Error("Not found");
  }
  const showReview = await ShowSchema.create(reqBody);
  return showReview;
};

module.exports = {
  createShow,
  getShow,
  getShowById,
  deleteShow,
  updateShow,
  createShowReview,
};
