import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import bodyParser from "body-parser";

// const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const day = new Date();
var userDate = day.getDay();
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  if (userDate == 0 || userDate == 6) {
    res.send("its the wknd");
  } else if (userDate != 0 || userDate != 6) {
    res.send("its the wkday");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
