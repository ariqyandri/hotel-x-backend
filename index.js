const express = require("express");
const { PORT } = require("./config/constants");
const cors = require("cors");
const corsMiddleWare = require("cors");
const bodyParserMiddleWare = express.json();
const categoriesRouter = require("./routers/categories");

const app = express();

app.use(cors());

app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());

app.use("/categories", categoriesRouter);

app.listen(PORT, () => {
  console.log(`Listening on Port:`, PORT);
});
