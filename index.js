const express = require("express");
const { PORT } = require("./config/constants");
const cors = require("cors");
const categoriesRouter = require("./routers/categories");

const app = express();

app.use(cors());

app.use("/categories", categoriesRouter);

app.listen(PORT, () => {
  console.log(`Listening on Port:`, PORT);
});
