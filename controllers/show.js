const showService = require("../services/show");

const createShow = async (req, res, next) => {
  console.log("req", req.body);
  try {
    const show = await showService.createShow({
      name: req.body.name,
      role: req.body.role,
      image: req.body.img,
    });
    res.status(200).json({ result: show });
  } catch (err) {
    next(err);
  }
};

const getShows = async (req, res, next) => {
  try {
    const shows = await showService.getShows();
    res.status(200).json({ result: shows });
  } catch (err) {
    next(err);
  }
};

const getShowById = async (req, res, next) => {
  try {
    const show = await showService.getShowById(req.params.id);
    res.status(200).json({ result: show });
  } catch (err) {
    next(err);
  }
};

const deleteShow = async (req, res, next) => {
  try {
    const show = await showService.deleteShow(req.params.id);
    res.status(200).json({ result: "done", deleteShow: show });
  } catch (err) {
    next(err);
  }
};

const updateShow = async (req, res, next) => {
  try {
    const show = await showService.updateShow(req.params.id, req.body);
    res.status(200).json({ result: "done", updateShow: show });
  } catch (err) {
    next(err);
  }
};

const createShowReview = async (req, res, next) => {
  try {
    const review = await showService.createShowReview(req.params.id, {
      name: req.body.name,
      text: req.body.text,
    });
    res.status(200).json({ result: review });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createShow,
  getShows,
  getShowById,
  deleteShow,
  updateShow,
  createShowReview,
};
