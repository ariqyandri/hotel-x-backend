const express = require("express");
const { PORT } = require("./config/constants");
const cors = require("cors");
const corsMiddleWare = require("cors");
const bodyParserMiddleWare = express.json();
const categoriesRouter = require("./routers/categories");
const attractionsRouter = require("./routers/attractions");
const facilitiesRouter = require("./routers/facilities");
const roomsRouter = require("./routers/rooms");

const app = express();

app.use(cors());

app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());

app.use("/categories", categoriesRouter);

app.use("/attractions", attractionsRouter);

app.use("/facilities", facilitiesRouter);

app.use("/rooms", roomsRouter);

app.listen(PORT, () => {
  console.log(`Listening on Port:`, PORT);
});
