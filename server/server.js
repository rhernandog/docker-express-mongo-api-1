const express = require("express");
const cors = require("cors");
const connectToDb = require("./db/index");
const { addValue, getAllValues } = require("./controllers/values");

connectToDb();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("<h1>BASE API ROUTE ANOTHER TITLE</h1>");
});

app.get("/api/values", async (req, res) => {
  const allValues = await getAllValues();
  console.log(allValues);
  res.status(200).json({
    success: true,
    data: allValues
  });
});

app.post("/api/value", async (req, res) => {
  const newValue = Math.round(Math.random() * 100);
  await addValue(newValue);
  console.log(newValue);
  res.json({
    data: "new value added",
    value: newValue
  });
})

app.listen(5000, () => {
  console.log("Express API listening on port 5000");
});
