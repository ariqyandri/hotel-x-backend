const { Router } = require("express");
const Rooms = require("../models").room;
const Facilities = require("../models").facility;
const RoomImages = require("../models").roomImage;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const rooms = await Rooms.findAll({
      include: [{ model: Facilities }, { model: RoomImages }],
    });
    res.status(200).send(rooms);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
