const { Router } = require("express");
const Categories = require("../models").category;
const About = require("../models").about;
const Contacts = require("../models").contact;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Categories.findAll();
    const about = await About.findAll();
    const contacts = await Contacts.findAll();
    res.status(200).send({ categories, about, contacts });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
