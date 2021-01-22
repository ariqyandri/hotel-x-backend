const { Router } = require("express");
const Categories = require("../models").category;
const About = require("../models").about;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Categories.findAll();
    const about = await About.findAll();
    res.status(200).send({ categories, about });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
