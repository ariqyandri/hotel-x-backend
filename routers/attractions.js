const { Router } = require("express");
const Attractions = require("../models").attraction;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const attractions = await Attractions.findAll();
    res.status(200).send(attractions);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
