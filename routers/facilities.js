const { Router } = require("express");
const Facilities = require("../models").facility;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const facilities = await Facilities.findAll();
    res.status(200).send(facilities);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
